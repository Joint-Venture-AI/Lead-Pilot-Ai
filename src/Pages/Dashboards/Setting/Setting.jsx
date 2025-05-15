import { IoArrowBackOutline, IoChevronForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonModal from "../../../components/Common/CommonModal";

const Setting = () => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    // API call here
    setShowModal(false);
  };

  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Setting</h1>
      </div>
      <div className="border border-gray-300 rounded-2xl">
        <div className="p-4 border-b border-gray-300">
          <h1>Setting</h1>
        </div>
        <div className="p-16 w-full space-y-7">
          <Link
            to="/setting/profile"
            className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer "
          >
            <p>Personal Information</p>
            <IoChevronForwardSharp />
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer "
          >
            <p>Change Password</p>
            <IoChevronForwardSharp />
          </button>

          <Link
            to="/setting/termsCondition"
            className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer "
          >
            <p>Terms & Condition</p>
            <IoChevronForwardSharp />
          </Link>

          <Link
            to="/setting/privacy"
            className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer "
          >
            <p>Privacy Policy</p>
            <IoChevronForwardSharp />
          </Link>

          <Link
            to="/setting/aboutUs"
            className="border border-gray-300 p-2 rounded flex justify-between items-center w-full px-7 cursor-pointer "
          >
            <p>About Us</p>
            <IoChevronForwardSharp />
          </Link>
        </div>
      </div>

      {/* ✅ Change Password Modal */}
      <CommonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Change Password"
      >
        <div className="space-y-4 mt-4">
          <label className="block mb-1">Current Password</label>
          <input
            type="password"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <label className="block mb-1">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />

          <div className="text-right">
            <button
              onClick={handleSave}
              className="bg-[#328569] text-white px-6 py-2 rounded-lg mt-2"
            >
              Save
            </button>
          </div>
        </div>
      </CommonModal>
    </div>
  );
};

export default Setting;
