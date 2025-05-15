import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Sharon",
    email: "alkhahsalkgsalkgsalk@gmail.com",
    phone: "12423000597212",
    role: "Admin",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log(formData); // Save API call here
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg border-gray-300 p-5">
      <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-4">
        <h2 className="font-semibold text-lg">Personal Information</h2>
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="bg-[#328569] text-white py-2 px-4 rounded-full flex items-center gap-2"
          >
            ✎ Edit Profile
          </button>
        )}
      </div>

      <div className="flex flex-col items-center lg:flex-row gap-6 py-5 px-20">
        {/* Left (Profile Image & Role) */}
        <div className="w-full lg:w-1/4 flex flex-col items-center border border-gray-300 p-14 rounded-md">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
          <p className="mt-4 text-gray-600">Profile</p>
          <p className="font-bold mt-3">{formData.role}</p>
        </div>

        {/* Right (Form Fields) */}
        <div className="w-full lg:w-3/4 space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              disabled={!isEditing}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">E-mail</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={!isEditing}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              disabled={!isEditing}
              inputClass="!w-full px-3 py-5"
              containerClass="!w-full"
            />
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#328569] text-white px-6 py-2 rounded-lg"
          >
            Save Info
          </button>
        </div>
      )}
    </form>
  );
};

export default ProfileInformation;
