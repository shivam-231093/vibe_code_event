import React from "react";

const StudentModal = ({ student, isOpen, onClose }) => {
  if (!isOpen || !student) return null;

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    try {
      return timestamp.toDate().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "N/A";
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-goldman font-bold text-white">
            Registration Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Team Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Team Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Team Size
                </label>
                <p className="text-white">{student.teamsize || "N/A"}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Team Name
                </label>
                <p className="text-white">{student.teamName || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <p className="text-white">{student.fullName || "N/A"}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <p className="text-white break-all">
                  {student.emailId || "N/A"}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Phone Number
                </label>
                <p className="text-white">{student.phoneNum || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Branch
                </label>
                <p className="text-white">{student.branch || "N/A"}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Semester
                </label>
                <p className="text-white">{student.semester || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Social Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  GitHub Profile
                </label>
                <p className="text-white break-all">
                  {student.github || "N/A"}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  LinkedIn Profile
                </label>
                <p className="text-white break-all">
                  {student.linkdin || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Team Member Information (if Dynamic Duo) */}
          {student.teamsize === "Dynamic Duo" && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Team Member Information
              </h3>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <h4 className="text-md font-semibold text-white mb-3">
                  Personal Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Full Name
                    </label>
                    <p className="text-white">{student.teamMember || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <p className="text-white break-all">
                      {student.teamEmailId || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Phone Number
                    </label>
                    <p className="text-white">
                      {student.teamPhoneNum || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <h4 className="text-md font-semibold text-white mb-3">
                  Academic Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Branch
                    </label>
                    <p className="text-white">{student.teamBranch || "N/A"}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Semester
                    </label>
                    <p className="text-white">
                      {student.teamSemester || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-md font-semibold text-white mb-3">
                  Social Profiles
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      GitHub Profile
                    </label>
                    <p className="text-white break-all">
                      {student.teamGithub || "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      LinkedIn Profile
                    </label>
                    <p className="text-white break-all">
                      {student.teamLinkdin || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Registration Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Registration Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Registration Date
                </label>
                <p className="text-white">{formatDate(student.timestamp)}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Registration ID
                </label>
                <p className="text-white font-mono text-sm">{student.id}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-800">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
