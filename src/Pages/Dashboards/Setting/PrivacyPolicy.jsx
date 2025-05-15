import  { useState } from 'react';

const PrivacyPolicy = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    terms:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro, suscipit at rem facilis libero laudantium, tenetur nisi omnis ducimus blanditiis quibusdam dolores fugiat nostrum dolore id. Perspiciatis pariatur inventore obcaecati illum odio perferendis dolore reiciendis officia sunt tenetur.",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      terms: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log(formData); // API call here
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-300 p-5">
        <h2 className="font-semibold text-lg">Privacy Policy</h2>
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="bg-[#328569] text-white py-2 px-4 rounded-full flex items-center gap-2"
          >
            ✎ Edit
          </button>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {!isEditing ? (
          <p className="text-gray-700 whitespace-pre-line leading-7">
            {formData.terms}
          </p>
        ) : (
          <textarea
            value={formData.terms}
            onChange={handleChange}
            className="w-full min-h-[300px] border border-gray-300 rounded px-3 py-2 resize-y"
          />
        )}
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end px-5 pb-5">
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

export default PrivacyPolicy;