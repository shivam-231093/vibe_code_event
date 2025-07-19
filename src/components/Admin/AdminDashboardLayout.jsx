import React from "react";
import { Outlet, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const AdminDashboardLayout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const adminSession = localStorage.getItem("adminSession");
    if (!adminSession) {
      navigate("/admin/login");
    } else {
      try {
        const parsedSession = JSON.parse(adminSession);
        setAdminData(parsedSession);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Invalid admin session:", error);
        localStorage.removeItem("adminSession");
        navigate("/admin/login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    navigate("/admin/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Admin Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/admin/dashboard"
                className="text-xl font-goldman font-bold text-white"
              >
                Admin Dashboard
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/admin/dashboard"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            </nav>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
