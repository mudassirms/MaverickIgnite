import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample top students data with year and grade
const topStudentsData = [
  { name: "Abdullah", score: 96, year: "2025", grade: "Grade 10" },
  { name: "Amit", score: 80, year: "2025", grade: "Grade 10" },
  { name: "Sohail", score: 20, year: "2025", grade: "Grade 10" },
  { name: "Sam", score: 45, year: "2025", grade: "Grade 10" },
  { name: "Sarah", score: 75, year: "2025", grade: "Grade 10" },

  { name: "Abid", score: 90, year: "2022", grade: "Grade 10" },
  { name: "Amit", score: 89, year: "2022", grade: "Grade 10" },
  { name: "Sohail", score: 91, year: "2022", grade: "Grade 10" },
  { name: "Sam", score: 88, year: "2022", grade: "Grade 10" },
  { name: "Sarah", score: 85, year: "2022", grade: "Grade 10" },

  { name: "Zara", score: 92, year: "2022", grade: "Grade 9" },
  { name: "Ali", score: 89, year: "2022", grade: "Grade 9" },
  { name: "Neha", score: 90, year: "2022", grade: "Grade 9" },
  { name: "Arjun", score: 87, year: "2022", grade: "Grade 9" },
  { name: "Kavya", score: 88, year: "2022", grade: "Grade 9" },
];

const TopPerformingStudents = ({ year, grade }) => {
  const filteredStudents =
    year && grade
      ? topStudentsData
          .filter((s) => s.year === year && s.grade === grade)
          .sort((a, b) => b.score - a.score)
      : topStudentsData.sort((a, b) => b.score - a.score).slice(0, 5);

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
    },
    title: {
      text:
        year && grade
          ? `Top Performing Students (${grade}, ${year})`
          : "Top Performing Students (Overall)",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: filteredStudents.map((s) => s.name),
      title: { text: null },
      labels: {
        style: { color: "#D1D5DB" },
      },
      // Remove extra labels on x-axis (score label issue)
      tickWidth: 0, // Removes ticks from x-axis
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Score (%)",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#1F2937",
      borderColor: "#4B5563",
      style: { color: "#E5E7EB" },
      formatter: function () {
        return `<b>${this.key}</b>: ${this.y}%`;
      },
    },
    series: [
      {
        name: "", // Remove series name so it doesn't appear in the legend
        data: filteredStudents.map((s) => s.score),
        color: "#22D3EE",
        enableMouseTracking: false, // Disable mouse tracking to remove hover dots
      },
    ],
    credits: { enabled: false },
    legend: {
      enabled: false, // Disable the legend to remove series name dot
    },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {filteredStudents.length === 0 ? (
        <p className="text-red-400 text-sm">
          No data available for {grade}, {year}.
        </p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default TopPerformingStudents;
