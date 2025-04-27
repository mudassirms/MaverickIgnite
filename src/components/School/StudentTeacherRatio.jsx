import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Updated data structure with student & teacher counts
const allRatioData = [
  { school: "High School", students: 1100, teachers: 50, type: "Private", year: "2021" },
  { school: "High School", students: 1120, teachers: 40, type: "Private", year: "2022" },
  { school: "High School", students: 1000, teachers: 40, type: "Private", year: "2023" },
  { school: "High School", students: 1200, teachers: 40, type: "Private", year: "2024" },
  { school: "High School", students: 1200, teachers: 40, type: "Private", year: "2025"},
];

const StudentTeacherRatioPerSchool = ({ year }) => {
  const filteredData = year
    ? allRatioData.filter((item) => item.year === year)
    : allRatioData;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: { fontFamily: "sans-serif" },
    },
    title: {
      text: `Student vs Teacher Count ${year ? `${year}` : ""}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year),
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
    },
    legend: {
      itemStyle: { color: "#F9FAFB" },
    },
    plotOptions: {
      column: {
        grouping: true,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Students",
        data: filteredData.map((d) => d.students),
        color: "#3B82F6", // Blue
      },
      {
        name: "Teachers",
        data: filteredData.map((d) => d.teachers),
        color: "#e0b08d", // Green
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
        <p className="text-red-400 text-sm">
          No data found for {year || "selected year"}.
        </p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default StudentTeacherRatioPerSchool;
