import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const EarningProgressBar = () => {
  const dataWeekly = [
    { name: "Mon", earnings: 12000 },
    { name: "Tue", earnings: 15000 },
    { name: "Wed", earnings: 18000 },
    { name: "Thu", earnings: 20000 },
    { name: "Fri", earnings: 10000 },
    { name: "Sat", earnings: 8000 },
    { name: "Sun", earnings: 13000 },
  ];

  const dataMonthly = [
    { name: "Week 1", earnings: 40000 },
    { name: "Week 2", earnings: 45000 },
    { name: "Week 3", earnings: 47000 },
    { name: "Week 4", earnings: 42000 },
  ];

  const dataYearly = [
    { name: "Jan", earnings: 60000 },
    { name: "Feb", earnings: 58000 },
    { name: "Mar", earnings: 65000 },
    { name: "Apr", earnings: 70000 },
    { name: "May", earnings: 72000 },
    { name: "Jun", earnings: 68000 },
    { name: "Jul", earnings: 64000 },
    { name: "Aug", earnings: 71000 },
    { name: "Sep", earnings: 69000 },
    { name: "Oct", earnings: 73000 },
    { name: "Nov", earnings: 75000 },
    { name: "Dec", earnings: 77000 },
  ];

  const [view, setView] = useState("monthly");

  const dataMap = {
    weekly: dataWeekly,
    monthly: dataMonthly,
    yearly: dataYearly,
  };

  return (
    <div className="p-4 rounded w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Earnings</h2>
        <select
          className="outline-none p-1 rounded text-sm"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataMap[view]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar
            dataKey="earnings"
            fill="#3B9C79"
            barSize={30}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningProgressBar;
