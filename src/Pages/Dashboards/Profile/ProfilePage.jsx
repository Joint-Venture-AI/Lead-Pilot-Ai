import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiEdit2, FiExternalLink, FiLock } from "react-icons/fi";

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSavePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Mock sending data to API
    console.log("Password changed successfully!");
    alert("Password changed successfully!");

    closeModal();
  };

  return (
    <div className="p-6">
      {/* Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl shadow-sm border border-base-300">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-1 right-1 p-2 cursor-pointer rounded-full bg-white/60">
              <FaEdit className="text-gray-600" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <span className="mt-2 text-sm font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Admin
            </span>
            <h2 className="text-lg font-semibold mt-2">Mahdee Rashid</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">E-mail</p>
            <p className="text-gray-600">polash@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">+880 1636 828200</p>
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <a
              href="https://linkedin.com/in/polash"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/polash
            </a>
          </div>
          <div>
            <p className="font-medium">Website</p>
            <a
              href="https://polashportfolio.com"
              className="text-blue-500 hover:underline"
            >
              polashportfolio.com
            </a>
          </div>
        </div>
      </div>

      {/* Update Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Name</label>
          <div className="relative">
            <input
              type="text"
              value="Mahdee Rashid"
              readOnly
              className="w-full bg-blue-100 text-blue-500 rounded-lg py-2 px-4 pr-10 outline-none"
            />
            <FiEdit2 className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">E-mail</label>
          <div className="relative">
            <input
              type="email"
              value="mahdeerashid@gmail.com"
              readOnly
              className="w-full bg-blue-100 text-blue-500 rounded-lg py-2 px-4 pr-10 outline-none"
            />
            <FiEdit2 className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="mt-8 p-6 rounded-2xl border border-blue-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full">
            <FiLock className="text-gray-500" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Change Password</h4>
          </div>
        </div>
        <button
          onClick={openModal}
          className="text-gray-500 hover:text-blue-500 transition"
        >
          <FiExternalLink size={20} />
        </button>
      </div>

      {/* Delete Account */}
      <div className="flex justify-between items-center mt-8 p-6 rounded-2xl border border-red-300">
        <div>
          <h4 className="text-red-500 font-bold text-lg">Delete Account</h4>
          <p className="text-gray-500 text-sm mt-2">
            Contact our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              support team
            </a>{" "}
            to process the deletion of your account.
          </p>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Apply Delete
          </button>
        </div>
      </div>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Change Password
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePassword}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
