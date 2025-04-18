import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { motion } from "framer-motion";

const mockData = [
  {
    name: "Mr. Sharma",
    year: "2023",
    payscale: 90000,
    subjects: ["Math", "Physics"],
    score: 65,
  },
  {
    name: "Ms. Gupta",
    year: "2023",
    payscale: 50000,
    subjects: ["English", "History"],
    score: 82,
  },
  {
    name: "Mr. Khan",
    year: "2022",
    payscale: 95000,
    subjects: ["Biology", "Chemistry"],
    score: 55,
  },
  {
    name: "Ms. Patel",
    year: "2022",
    payscale: 45000,
    subjects: ["Geography", "Civics"],
    score: 78,
  },
];

const TeacherPerformanceChart = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedTeacher, setSelectedTeacher] = useState("Mr. Sharma");

  const teachers = mockData
    .filter((d) => d.year === selectedYear)
    .map((d) => d.name);

  const teacherData = mockData.find(
    (d) => d.name === selectedTeacher && d.year === selectedYear
  );

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: `Performance of ${selectedTeacher} (${selectedYear})`,
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: ["Score", "Payscale"],
      labels: {
        style: { color: "#D1D5DB" },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Value",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.x}</b>: ${this.y}`;
      },
      backgroundColor: "#1F2937",
      style: { color: "#F9FAFB" },
    },
    series: [
      {
        name: selectedTeacher,
        data: [
          {
            y: teacherData?.score,
            color:
              teacherData?.payscale > 80000 && teacherData?.score < 70
                ? "#EF4444"
                : "#3B82F6",
          },
          {
            y: teacherData?.payscale / 1000, // scaled down to match score
            color: "#10B981",
          },
        ],
        dataLabels: {
          enabled: true,
          style: {
            color: "#F9FAFB",
            textOutline: "none",
          },
        },
      },
    ],
    legend: {
      itemStyle: { color: "#D1D5DB" },
    },
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-md border border-gray-700 space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <label className="text-gray-300 text-sm">Select Year</label>
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedTeacher(
                mockData.find((d) => d.year === e.target.value)?.name || ""
              );
            }}
            className="bg-gray-700 text-white rounded px-3 py-1"
          >
            {[...new Set(mockData.map((d) => d.year))].map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-300 text-sm">Select Teacher</label>
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="bg-gray-700 text-white rounded px-3 py-1"
          >
            {teachers.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject & Payscale Info */}
      {teacherData && (
        <div className="text-gray-200 space-y-1 text-sm">
          <p><strong>Subjects:</strong> {teacherData.subjects.join(", ")}</p>
          <p><strong>Payscale:</strong> ₹{teacherData.payscale.toLocaleString()}</p>
          <p><strong>Score:</strong> {teacherData.score}</p>
        </div>
      )}

      {/* Chart */}
      {teacherData ? (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      ) : (
        <p className="text-red-400">No data for selected teacher/year.</p>
      )}
    </motion.div>
  );
};

export default TeacherPerformanceChart;
