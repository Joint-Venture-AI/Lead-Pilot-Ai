import { IoAlertCircleOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";
import CommonModal from "../../../components/Common/CommonModal";

const users = [
  {
    id: "#A1X9347B",
    fullName: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    date: "2024-05-01",
  },
  {
    id: "#B2Y4831L",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
    date: "2024-05-02",
  },
  {
    id: "#C3Z1945M",
    fullName: "Robert Johnson",
    email: "robert.johnson@example.com",
    username: "robj",
    date: "2024-05-03",
  },
  {
    id: "#D4W6728K",
    fullName: "Emily Davis",
    email: "emily.davis@example.com",
    username: "emidavis",
    date: "2024-05-04",
  },
  {
    id: "#E5V8293F",
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    username: "mikeb",
    date: "2024-05-05",
  },
  {
    id: "#F6U7419T",
    fullName: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    username: "swilson",
    date: "2024-05-06",
  },
  {
    id: "#G7T3821Z",
    fullName: "David Lee",
    email: "david.lee@example.com",
    username: "dlee",
    date: "2024-05-07",
  },
  {
    id: "#H8S5647R",
    fullName: "Laura Clark",
    email: "laura.clark@example.com",
    username: "lclark",
    date: "2024-05-08",
  },
  {
    id: "#I9R1234N",
    fullName: "Chris Walker",
    email: "chris.walker@example.com",
    username: "cwalker",
    date: "2024-05-09",
  },
  {
    id: "#J0Q8493X",
    fullName: "Amy Hall",
    email: "amy.hall@example.com",
    username: "amyhall",
    date: "2024-05-10",
  },
  {
    id: "#K1P0375Y",
    fullName: "Daniel Allen",
    email: "daniel.allen@example.com",
    username: "dallen",
    date: "2024-05-11",
  },
  {
    id: "#L2O6239A",
    fullName: "Jessica Young",
    email: "jessica.young@example.com",
    username: "jyoung",
    date: "2024-05-12",
  },
  {
    id: "#M3N7834D",
    fullName: "Matthew Hernandez",
    email: "matthew.hernandez@example.com",
    username: "mhernandez",
    date: "2024-05-13",
  },
  {
    id: "#N4M4812Q",
    fullName: "Ashley King",
    email: "ashley.king@example.com",
    username: "aking",
    date: "2024-05-14",
  },
  {
    id: "#O5L9267V",
    fullName: "Joshua Wright",
    email: "joshua.wright@example.com",
    username: "jwright",
    date: "2024-05-15",
  },
  {
    id: "#P6K3842E",
    fullName: "Olivia Scott",
    email: "olivia.scott@example.com",
    username: "oscott",
    date: "2024-05-16",
  },
  {
    id: "#Q7J2938U",
    fullName: "Andrew Green",
    email: "andrew.green@example.com",
    username: "agreen",
    date: "2024-05-17",
  },
  {
    id: "#R8I7581C",
    fullName: "Megan Adams",
    email: "megan.adams@example.com",
    username: "madams",
    date: "2024-05-18",
  },
  {
    id: "#S9H1834T",
    fullName: "Ryan Baker",
    email: "ryan.baker@example.com",
    username: "rbaker",
    date: "2024-05-19",
  },
  {
    id: "#T0G3456B",
    fullName: "Sophia Nelson",
    email: "sophia.nelson@example.com",
    username: "snelson",
    date: "2024-05-20",
  },
];

const USERS_PER_PAGE = 12;

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const [goTo, setGoTo] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paginatedUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handleGo = () => {
    const page = Math.max(1, Math.min(totalPages, parseInt(goTo)));
    if (!isNaN(page)) setCurrentPage(page);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
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
        <button key={i} className="px-3 py-2 border rounded mx-1 text-gray-500">...</button>
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
      <h1 className="text-2xl font-semibold mb-5">All User</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center">
          <thead className="bg-[#3B9C79] text-white">
            <tr>
              <th className="py-5">ID</th>
              <th className="py-5">Full Name</th>
              <th className="py-5">Email</th>
              <th className="py-5">Phone Number</th>
              <th className="py-5">Address</th>
              <th className="py-5">Date</th>
              <th className="py-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((student, idx) => (
              <tr key={idx} className="border-t border-gray-200 text-gray-500">
                <td className="py-4">{student.id}</td>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>+9823623987</td>
                <td>123 Main St, New York, NY</td>
                <td>{student.date}</td>
                <td className="flex justify-center pt-3 text-2xl">
                  <button
                    onClick={() => handleViewUser(student)}
                    className="hover:text-[#3B9C79]"
                  >
                    <IoAlertCircleOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
          <button
            onClick={handleGo}
            className="px-4 py-1 rounded"
          >
            Go
          </button>
        </div>
      </div>

      {/* Common Modal */}
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User Details"
      >
        {selectedUser && (
          <div className="space-y-5">
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>#SL:</strong>{" "}
              </p>
              <span>{selectedUser.id}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Full Name:</strong>{" "}
              </p>
              <span>{selectedUser.fullName}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Email:</strong>
              </p>
              <span>{selectedUser.email}</span>
            </div>
            <div className="flex items-center justify-between p-1 border-b border-gray-200">
              <p>
                <strong>Address:</strong>
              </p>
              123 Main St, New York, NY
            </div>
            <div className="w-full ">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 w-full bg-[#3B9C79] text-white rounded cursor-pointer">Download</button>
            </div>
          </div>
          
        )}
      </CommonModal>
    </div>
  );
};

export default Users;