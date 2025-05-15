import { IoCheckmarkCircleSharp } from "react-icons/io5";
import CommonBar from "../../../components/Common/CommonBar";
import { Link } from "react-router-dom";

const Subscription = () => {
  const currentRoute =
    location.pathname.split("/").filter(Boolean).pop() || "Dashboard";

  const plans = [
    {
      id: 1,
      name: "Weekly",
      price: "$9.99",
      features: [
        "View Members Directory",
        "Access Weekly Reports",
        "Priority Email Support",
        "View Event Calendar",
        "Join Weekly Webinars",
        "Cancel Anytime",
      ],
    },
    {
      id: 2,
      name: "Monthly",
      price: "$29.99",
      features: [
        "View Members Directory",
        "Access Monthly Reports",
        "Dedicated Support",
        "Downloadable Resources",
        "Join Monthly Workshops",
        "Cancel Anytime",
      ],
    },
    {
      id: 3,
      name: "Yearly",
      price: "$199.99",
      features: [
        "View Members Directory",
        "Full Year Reports",
        "1-on-1 Consultation",
        "All Premium Resources",
        "Free Event Access",
        "Cancel Anytime",
      ],
    },
  ];

  return (
    <div className="p-4">
      <CommonBar currentRoute={currentRoute} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border border-gray-200 shadow-xl rounded-2xl p-5"
          >
            <div className="text-center p-4 border-b border-gray-200 text-2xl font-bold mb-5">
              <p>{plan.name}</p>
              <p>{plan.price}</p>
            </div>

            <ul className="space-y-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <IoCheckmarkCircleSharp className="text-[#328569] text-xl" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="w-full mt-5">
              <Link
                to={`/subscription/update/${plan.id}`}
                className="block w-full text-center px-4 py-2 bg-[#3b9c787e] text-white rounded-lg"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
