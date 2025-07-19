import React from "react";

const StudentCard = ({ student, onViewDetails }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    try {
      return timestamp.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "N/A";
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {student.fullName || "N/A"}
          </h3>
          <p className="text-gray-400 text-sm font-poppins">
            {student.emailId || "N/A"}
          </p>
        </div>
        <div className="flex items-center">
          <span
            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
              student.teamsize === "Solo Rider"
                ? "bg-blue-900 text-blue-300"
                : "bg-purple-900 text-purple-300"
            }`}
          >
            {student.teamsize || "N/A"}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Phone:</span>
          <span className="text-white">{student.phoneNum || "N/A"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Team:</span>
          <span className="text-white truncate ml-2" title={student.teamName}>
            {student.teamName || "N/A"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Branch:</span>
          <span className="text-white">{student.branch || "N/A"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Semester:</span>
          <span className="text-white">{student.semester || "N/A"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Registered:</span>
          <span className="text-white">{formatDate(student.timestamp)}</span>
        </div>
      </div>

      <button
        onClick={() => onViewDetails(student)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        View Details
      </button>
    </div>
  );
};

export default StudentCard;
