import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import StudentCard from "../../components/Admin/StudentCard";
import StudentModal from "../../components/Admin/StudentModal";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    soloCount: 0,
    teamCount: 0,
    soloParticipants: 0,
    duoParticipants: 0,
    totalParticipants: 0,
    recentRegistrations: 0,
    semesterStats: {},
  });
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log("Fetching dashboard data...");

      // Fetch registrations data
      const registrationsQuery = query(
        collection(db, "registrations"),
        orderBy("timestamp", "desc")
      );
      const registrationsSnapshot = await getDocs(registrationsQuery);
      const registrations = registrationsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched registrations:", registrations);
      console.log("Sample registration data:", registrations[0]);

      // Calculate stats
      const totalUsers = registrations.length;
      const recentRegistrations = registrations.filter((registration) => {
        const regDate = registration.timestamp?.toDate() || new Date();
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return regDate >= weekAgo;
      }).length;

      // Count solo and team registrations
      const soloCount = registrations.filter(
        (reg) => reg.teamsize === "Solo Rider"
      ).length;
      const teamCount = registrations.filter(
        (reg) => reg.teamsize === "Dynamic Duo"
      ).length;

      // Calculate participants
      const soloParticipants = soloCount; // Solo riders = 1 participant each
      const duoParticipants = teamCount * 2; // Duo teams = 2 participants each
      const totalParticipants = soloParticipants + duoParticipants;

      // Count semester-wise participants
      const semesterStats = registrations.reduce((acc, reg) => {
        const semester = reg.semester || "Unknown";
        acc[semester] = (acc[semester] || 0) + 1;
        return acc;
      }, {});

      setStats({
        totalUsers,
        soloCount,
        teamCount,
        soloParticipants,
        duoParticipants,
        totalParticipants,
        recentRegistrations,
        semesterStats,
      });

      setStudents(registrations);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleExportEmails = () => {
    try {
      console.log("Total students:", students.length);
      console.log("Students data:", students);

      if (students.length === 0) {
        alert(
          "No student data available to export. Please ensure there are registrations in the database."
        );
        return;
      }

      // Collect all unique emails from emailId and teamEmailId fields
      const uniqueEmails = new Set();
      const emailDetails = [];

      students.forEach((student) => {
        // Add primary email (emailId)
        if (student.emailId && student.emailId.trim()) {
          const email = student.emailId.trim();
          if (!uniqueEmails.has(email)) {
            uniqueEmails.add(email);
            emailDetails.push({
              email: email,
              name: student.fullName || "N/A",
              type: "Primary",
              teamsize: student.teamsize || "N/A",
              semester: student.semester || "N/A",
              branch: student.branch || "N/A",
              teamName: student.teamName || "N/A",
              phoneNum: student.phoneNum || "N/A",
              github: student.github || "N/A",
              linkdin: student.linkdin || "N/A",
              timestamp: student.timestamp?.seconds
                ? new Date(student.timestamp.seconds * 1000).toISOString()
                : new Date().toISOString(),
              registrationId: student.id,
            });
          }
        }

        // Add team member email (teamEmailId) - only for Dynamic Duo
        if (
          student.teamEmailId &&
          student.teamEmailId.trim() &&
          student.teamsize === "Dynamic Duo"
        ) {
          const email = student.teamEmailId.trim();
          if (!uniqueEmails.has(email)) {
            uniqueEmails.add(email);
            emailDetails.push({
              email: email,
              name: student.teamMember || "N/A",
              type: "Team Member",
              teamsize: student.teamsize || "N/A",
              semester: student.teamSemester || "N/A",
              branch: student.teamBranch || "N/A",
              teamName: student.teamName || "N/A",
              phoneNum: student.teamPhoneNum || "N/A",
              github: student.teamGithub || "N/A",
              linkdin: student.teamLinkdin || "N/A",
              timestamp: student.timestamp?.seconds
                ? new Date(student.timestamp.seconds * 1000).toISOString()
                : new Date().toISOString(),
              registrationId: student.id,
            });
          }
        }
      });

      // Sort by email for better organization
      emailDetails.sort((a, b) => a.email.localeCompare(b.email));

      console.log("Unique emails to export:", emailDetails);

      // Create JSON blob and download
      const exportData = {
        exportDate: new Date().toISOString(),
        totalUniqueEmails: emailDetails.length,
        totalRegistrations: students.length,
        emails: emailDetails,
      };

      const jsonString = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement("a");
      link.href = url;
      link.download = `unique-participant-emails-${
        new Date().toISOString().split("T")[0]
      }.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);

      console.log(
        `Exported ${emailDetails.length} unique emails from ${students.length} registrations`
      );
      alert(
        `Successfully exported ${emailDetails.length} unique emails from ${students.length} registrations!`
      );
    } catch (error) {
      console.error("Error exporting emails:", error);
      alert("Failed to export emails. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white text-lg">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-goldman font-bold text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400 font-poppins">
          Welcome to the admin dashboard. Here's what's happening.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {/* Total Registrations */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Total Registrations
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.totalUsers}
              </p>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Solo Riders */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Solo Rider Teams
              </p>
              <p className="text-2xl font-bold text-white">{stats.soloCount}</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Duo */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Dynamic Duo Teams
              </p>
              <p className="text-2xl font-bold text-white">{stats.teamCount}</p>
            </div>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Solo Participants */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Solo Participants
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.soloParticipants}
              </p>
            </div>
            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Duo Participants */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Duo Participants
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.duoParticipants}
              </p>
            </div>
            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Participants */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-400">
                Total Participants
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.totalParticipants}
              </p>
            </div>
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Semester-wise Statistics */}
      {Object.keys(stats.semesterStats).length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Semester-wise Participants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Object.entries(stats.semesterStats).map(([semester, count]) => (
              <div
                key={semester}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">
                      {semester}
                    </p>
                    <p className="text-xl font-bold text-white">{count}</p>
                  </div>
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Student Registrations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Student Registrations ({students.length})
          </h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleExportEmails}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Export Emails</span>
            </button>
            <div className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>

        {/* Student Cards Grid */}
        {currentStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
            <svg
              className="w-12 h-12 text-gray-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              No Students Found
            </h3>
            <p className="text-gray-500">
              No student registrations available at the moment.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === pageNumber
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 bg-gray-800 border border-gray-700 hover:bg-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Student Details Modal */}
      <StudentModal
        student={selectedStudent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AdminDashboard;
