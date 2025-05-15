// import React from 'react';
import { useState } from "react";
// your oil data
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import course from "./Course";
import { useLocation } from "react-router-dom";
import CommonBar from "../../../components/Common/CommonBar";

const Courses = () => {
  const location = useLocation();
  const currentRoute =
    location.pathname.split("/").filter(Boolean).pop() || "Dashboard";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(course.length / itemsPerPage);
  const [goTo, setGoTo] = useState("");

  const paginatedCourse = course.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleGo = () => {
    const page = Math.max(1, Math.min(totalPages, parseInt(goTo)));
    if (!isNaN(page)) setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((num, i) =>
      num === "..." ? (
        <button key={i} className="px-3 py-2 border rounded mx-1 text-gray-500">
          ...
        </button>
      ) : (
        <button
          key={i}
          onClick={() => setCurrentPage(num)}
          className={`px-4 py-2 border rounded mx-1 ${
            currentPage === num
              ? "bg-[#3B9C79] text-white"
              : "border-[#3B9C79] text-[#3B9C79]"
          }`}
        >
          {num}
        </button>
      )
    );
  };
  return (
    <div className="p-4">
      <CommonBar currentRoute={currentRoute} />
      <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paginatedCourse.map((course, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-green-200 shadow"
          >
            <img
              src={course.image}
              alt={course.name}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">{course.name}</h1>
              <p className="text-xs">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap items-center justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-[#3B9C79] text-white rounded flex items-center gap-3"
        >
          <IoChevronBackOutline /> Back
        </button>

        {renderPageNumbers()}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-[#3B9C79] text-white rounded flex items-center gap-3"
        >
          Next <IoChevronForwardOutline />
        </button>

        {/* Page input */}
        <div className="flex items-center gap-2 ml-4">
          <span>Page</span>
          <input
            type="number"
            className="w-14 outline-none bg-[#3B9C79] text-white rounded px-2 py-2 text-center"
            value={goTo}
            onChange={(e) => setGoTo(e.target.value)}
            placeholder={`${currentPage}`}
          />
          <button onClick={handleGo} className="px-4 py-1 rounded">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
