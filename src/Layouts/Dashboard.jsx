// import logo from "../assets/logo/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";
import { FaRightFromBracket } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
import Swal from "sweetalert2";

const Dashboard = () => {
  const location = useLocation();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "No, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User logged out");
      }
    });
  };

  const iconMappings = {
    Home: BiHomeAlt2,
    Lead: AiOutlineUsergroupAdd,
    Settings: RiSettings4Line,
    Notification: IoNotificationsOutline,
  };

  const Menus = [
    {
      title: "Home",
      path: "/",
      icon: iconMappings.Home,
      role: "admin",
      gap: true,
    },
    {
      title: "Lead",
      path: "/lead",
      icon: iconMappings.Lead,
      role: "admin",
    },
    {
      title: "Notification",
      path: "/notification",
      icon: iconMappings.Notification,
      role: "admin",
    },
    {
      title: "Settings",
      path: "/setting",
      icon: iconMappings.Settings,
      role: "admin",
    },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-60 p-4 h-screen bg-[#E5F2FF] shadow-xl fixed left-0 top-0 bottom-0 z-50 pt-8 transition-all duration-500`}
      >
        <div className="mb-7 flex gap-2 justify-center items-center">
          <img
            src='{logo}'
            alt="logo"
            className={`cursor-pointer w-16 p-1 duration-500`}
          />
          <h1 className="text-xl font-semibold">Lead Pilot Ai</h1>
        </div>

        <ul
          className={`${
            open ? "" : "flex flex-col items-center justify-center"
          }`}
        >
          {adminMenus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex rounded-full p-2 cursor-pointer text-sm items-center gap-x-4 mt-3 ${
                location.pathname === Menu.path
                  ? "text-[#007AFF]"
                  : "hover:bg-[#007AFF]/5"
              }`}
            >
              <li className="flex items-center gap-x-3 ps-3">
                <IconContext.Provider
                  value={{ className: "react-icon text-xl" }}
                >
                  <Menu.icon />
                </IconContext.Provider>
                <span className={`origin-left duration-200`}>{Menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="mt-28 bottom-10 absolute w-full">
          <button
            onClick={handleLogout}
            className={`flex cursor-pointer text-sm items-center justify-center  p-2 w-4/5 ms-2.5 rounded bg-red-500 text-white`}
          >
            <li className="flex items-center justify-center gap-x-4 w-full">
              <FaRightFromBracket />
              <span className={`origin-left duration-200`}>Logout</span>
            </li>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`pl-64 p-6 ms-6 flex-1 overflow-y-auto transition-all duration-500 h-[100vh]`}
      >
        <div className=" py-4 flex justify-between items-center mb-4 border-b border-gray-200">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome, John 👋
            </h1>
            <p className="text-sm text-gray-500">Have a wonderful day!</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-medium text-gray-800">John Max</span>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
