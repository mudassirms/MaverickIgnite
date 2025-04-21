import { useState } from "react";
import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const teacherData = [
  { name: "Mr. Sharma", salary: 28000, performance: 72 },
  { name: "Kunaal", salary: 25000, performance: 70 },
  { name: "Karthik", salary: 29000, performance: 82 },
  { name: "Ms. Rani", salary: 34000, performance: 78 },
  { name: "Mr. Patel", salary: 39000, performance: 80 },
  { name: "Mr. Jabbar", salary: 47000, performance: 85 },
  { name: "Mr. Ayaaz", salary: 54000, performance: 88 },
  { name: "Ms. Inayat", salary: 63000, performance: 92 },
];

const salaryRanges = [
  { label: "20k-30k", min: 20000, max: 30000 },
  { label: "30k-40k", min: 30000, max: 40000 },
  { label: "40k-50k", min: 40000, max: 50000 },
  { label: "50k-60k", min: 50000, max: 60000 },
  { label: "60k-70k", min: 60000, max: 70000 },
];

const TeacherPerformanceBySalary = () => {
  const [selectedRange, setSelectedRange] = useState("");

  const filteredData = selectedRange
    ? teacherData.filter((t) => {
        const range = salaryRanges.find((r) => r.label === selectedRange);
        return t.salary >= range.min && t.salary <= range.max;
      })
    : [];

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text: `Teacher Performance ${selectedRange ? `(${selectedRange})` : ""}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((t) => t.name),
      title: { text: "Teacher", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      title: { text: "Performance %", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      formatter: function () {
        const index = this.point.index;
        const teacher = filteredData[index];
        return `<b>${teacher.name}</b><br/>Salary: ₹${teacher.salary.toLocaleString()}<br/>Performance: ${teacher.performance}%`;
      },
    },
    series: [
      {
        name: "Performance",
        data: filteredData.map((t) => ({
          y: t.performance,
          name: t.name,
        })),
        color: "#60A5FA",
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-4">
        <select
          className="bg-gray-700 text-white px-4 py-2 rounded-md"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="">Select Salary Range</option>
          {salaryRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {selectedRange && filteredData.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{ style: { width: "100%", height: "100%" } }}
          />
        </div>
      ) : selectedRange ? (
        <p className="text-gray-400">No teachers in selected range.</p>
      ) : null}
    </motion.div>
  );
};

export default TeacherPerformanceBySalary;
