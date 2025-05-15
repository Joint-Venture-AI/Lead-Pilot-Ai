import { useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddRecipes = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    recipeLink: "",
    LinkTitle: "",
    description: "",
    category: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would normally send the data to your backend
    console.log("Submitting course data:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or redirect
      toast.success("Recipe added successfully!");
      // You could redirect here or clear the form
    }, 1000);
  };

  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/Recipe" className="mr-4">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">Add Recipe</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-6 border border-gray-300 rounded-xl"
      >
        {/* Image Upload */}
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center w-50 h-64 border border-gray-200 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 mb-2">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Course Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    id="image-upload"
                    onChange={handleImageUpload}
                  />
                  {/* <span className="font-semibold">Upload Image</span> */}
                  <label
                    htmlFor="image-upload"
                    className="block text-sm font-medium text-center text-gray-400 cursor-pointer"
                  >
                    Upload Image
                  </label>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Course Title and Link */}
        <div className=" border border-gray-300 rounded-xl p-6 pb-0 gap-6 mb-6">
          <div className=" grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter a name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Recipe Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                required
              >
                <option value="" disabled>
                  Enter a name
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>
          <div className="mb-6 w-full">
            <label htmlFor="description" className="block text-sm mb-1">
              Recipe Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter a description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            ></textarea>
          </div>
          <div className=" grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Link
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter a name"
                value={formData.LinkTitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>
            <div>
              <label htmlFor="courseLink" className="block text-sm mb-1">
                Link
              </label>
              <input
                type="text"
                id="courseLink"
                name="courseLink"
                placeholder="Enter a link"
                value={formData.recipeLink}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className=" py-3 bg-[#7BC9AC] hover:bg-[#3B9C79] text-white font-medium rounded-lg transition duration-300 w-62"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipes;
