import { useState } from "react";
import {
  IoAlertCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import CommonModal from "../../../components/Common/CommonModal";

// import React from 'react';
const history = [
  {
    id: "#JK8j9MT4",
    name: "John Smith",
    email: "johnsmith@gmail.com",
    address: "123 Main St, New York, NY",
  },
  {
    id: "#PL5u7KV9",
    name: "Emily Davis",
    email: "emilydavis@mail.com",
    address: "456 Elm St, Chicago, IL",
  },
  {
    id: "#XZ1o3BH7",
    name: "Michael Brown",
    email: "michaelb@yahoo.com",
    address: "789 Maple Ave, Dallas, TX",
  },
  {
    id: "#RC2y6ZN8",
    name: "Sophia Wilson",
    email: "sophiawilson@gmail.com",
    address: "321 Oak St, Seattle, WA",
  },
  {
    id: "#MV3t8GF5",
    name: "David Johnson",
    email: "david.j@hotmail.com",
    address: "654 Pine Rd, Miami, FL",
  },
  {
    id: "#KL9r2JD6",
    name: "Olivia Miller",
    email: "oliviamiller@mail.com",
    address: "987 Birch Ln, Boston, MA",
  },
  {
    id: "#DB4w1LM3",
    name: "James Taylor",
    email: "jtaylor@gmail.com",
    address: "159 Cedar Blvd, Denver, CO",
  },
  {
    id: "#ZU0x5NC2",
    name: "Isabella Martinez",
    email: "isamartinez@mail.com",
    address: "753 Walnut St, Phoenix, AZ",
  },
  {
    id: "#QN7e3PF9",
    name: "William Lee",
    email: "williamlee@mail.com",
    address: "963 Cherry St, Atlanta, GA",
  },
  {
    id: "#HY5b8RQ1",
    name: "Mia Thompson",
    email: "miat@mail.com",
    address: "852 Spruce Ave, Austin, TX",
  },
  {
    id: "#VA6u4TE7",
    name: "Alexander Scott",
    email: "alexscott@gmail.com",
    address: "147 Palm Dr, Orlando, FL",
  },
  {
    id: "#BG3i7UF6",
    name: "Ava Lewis",
    email: "avalewis@gmail.com",
    address: "369 Oakwood Ln, Portland, OR",
  },
  {
    id: "#TY9o6WD2",
    name: "Daniel Hall",
    email: "danielh@mail.com",
    address: "578 Maple Blvd, San Diego, CA",
  },
  {
    id: "#LJ1q5XE3",
    name: "Charlotte Allen",
    email: "charlotteallen@mail.com",
    address: "235 Forest Rd, San Jose, CA",
  },
  {
    id: "#WP0m8YB9",
    name: "Henry Young",
    email: "henryyoung@gmail.com",
    address: "846 Willow St, Las Vegas, NV",
  },
  {
    id: "#CK2n7ZA4",
    name: "Ella King",
    email: "ellaking@mail.com",
    address: "194 Aspen Ave, Salt Lake City, UT",
  },
  {
    id: "#UJ8p3CD5",
    name: "Joseph Wright",
    email: "jw.right@mail.com",
    address: "315 Ridge Rd, Tampa, FL",
  },
  {
    id: "#MS4t6QE0",
    name: "Luna Harris",
    email: "lunah@gmail.com",
    address: "278 Garden St, Minneapolis, MN",
  },
  {
    id: "#FD6r2VB7",
    name: "Logan Green",
    email: "logreen@mail.com",
    address: "983 Sunset Blvd, Nashville, TN",
  },
  {
    id: "#QA5z9NK2",
    name: "Grace Adams",
    email: "graceadams@gmail.com",
    address: "701 River Rd, Raleigh, NC",
  },
];

const HISTORY_PER_PAGE = 12;

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [goTo, setGoTo] = useState("");
  const [selectedData, setSelectedData] = useState(null); // ✅ selected transaction
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal state

  const totalPages = Math.ceil(history.length / HISTORY_PER_PAGE);

  const paginatedHistory = history.slice(
    (currentPage - 1) * HISTORY_PER_PAGE,
    currentPage * HISTORY_PER_PAGE
  );

  const handleGo = () => {
    const page = Math.max(1, Math.min(totalPages, parseInt(goTo)));
    if (!isNaN(page)) setCurrentPage(page);
  };

  const handleOpenModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
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
      <h1 className="text-2xl font-semibold mb-5">Transaction History</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center">
          <thead className="bg-[#3B9C79] text-white">
            <tr>
              <th className="py-5">#SL</th>
              <th className="py-5">Name</th>
              <th className="py-5">Email</th>
              <th className="py-5">Amount</th>
              <th className="py-5">Address</th>
              <th className="py-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedHistory.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-200 text-gray-500">
                <td className="py-4">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>$898</td>
                <td>{item.address}</td>
                <td className="flex justify-center pt-3 text-2xl">
                  <button onClick={() => handleOpenModal(item)}>
                    <IoAlertCircleOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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

      {/* ✅ Modal Usage */}
      <CommonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`Transaction Details - ${selectedData?.id}`}
      >
        {selectedData && (
          <div className="space-y-5">
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>#SL:</strong>{" "}
              </p>
              <span>{selectedData.id}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Name:</strong>{" "}
              </p>
              <span>{selectedData.name}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Email:</strong>
              </p>
              <span>{selectedData.email}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Amount:</strong>
              </p>
              $898
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Address:</strong>
              </p>
              {selectedData.address}
            </div>
            <div className="w-full ">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 w-full bg-[#3B9C79] text-white rounded cursor-pointer"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </CommonModal>
    </div>
  );
};

export default TransactionHistory;
