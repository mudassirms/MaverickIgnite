import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year for filtering (only one school)
const allRatioData = [
  { school: "Greenwood High", ratio: 22, type: "Private", year: "2025" },
  { school: "Greenwood High", ratio: 28, type: "Private", year: "2024" },
  { school: "Greenwood High", ratio: 25, type: "Private", year: "2023" },
  { school: "Greenwood High", ratio: 30, type: "Private", year: "2022" },
];

const StudentTeacherRatioPerSchool = ({ year }) => {
  // Filter the ratio data based on selected year only
  const filteredData = year
    ? allRatioData.filter((item) => item.year === year) // Filter data by selected year
    : allRatioData; // Show all data if no year is selected

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: `Student-Teacher Ratio For ${year || "All Years"}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year), // Use years as categories on the x-axis
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      title: {
        text: "Ratio",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Ratio: <b>{point.y}</b>",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Student-Teacher Ratio",
        data: filteredData.map((d) => d.ratio), // Plot ratio on the y-axis
        color: "#34D399", // Emerald for good ratio
      },
    ],
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {filteredData.length === 0 ? (
        <p className="text-red-400 text-sm">No data found for year {year || "selected year."}</p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default StudentTeacherRatioPerSchool;
