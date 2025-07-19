import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    secretKey: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate secret key
    if (formData.secretKey !== import.meta.env.VITE_ADMIN_SECRET_KEY) {
      setError(
        "Invalid secret key. You are not authorized to create an admin account."
      );
      setLoading(false);
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      // Check if admin with this email already exists
      const emailQuery = query(
        collection(db, "admins"),
        where("email", "==", formData.email)
      );
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        setError("An admin account with this email already exists.");
        setLoading(false);
        return;
      }

      // Check if admin with this username already exists
      const usernameQuery = query(
        collection(db, "admins"),
        where("username", "==", formData.username)
      );
      const usernameSnapshot = await getDocs(usernameQuery);

      if (!usernameSnapshot.empty) {
        setError("An admin account with this username already exists.");
        setLoading(false);
        return;
      }

      // Create new admin document
      const adminData = {
        username: formData.username,
        email: formData.email,
        password: formData.password, // In production, you should hash this
        createdAt: serverTimestamp(),
        isActive: true,
      };

      const docRef = await addDoc(collection(db, "admins"), adminData);

      // Store admin session data
      const adminSession = {
        id: docRef.id,
        email: formData.email,
        username: formData.username,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem("adminSession", JSON.stringify(adminSession));
      navigate("/admin/dashboard");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-goldman font-bold text-white mb-2">
            Admin Registration
          </h2>
          <p className="text-gray-400 font-poppins">
            Create your admin account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            <div>
              <label
                htmlFor="secretKey"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Admin Secret Key
              </label>
              <input
                id="secretKey"
                name="secretKey"
                type="password"
                required
                value={formData.secretKey}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter the admin secret key"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Creating Account..." : "Create Admin Account"}
          </button>

          <div className="text-center">
            <Link
              to="/admin/login"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Already have an account? Sign in here
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
            >
              ← Back to main site
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
