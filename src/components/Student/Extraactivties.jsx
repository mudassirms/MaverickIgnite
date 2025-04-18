import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year and grade
const activityData = [
  { activity: "Sports", participants: 120, year: "2025", grade: "Grade 10" },
  { activity: "Music", participants: 80, year: "2025", grade: "Grade 10" },
  { activity: "Drama", participants: 45, year: "2025", grade: "Grade 10" },
  { activity: "Debate", participants: 30, year: "2025", grade: "Grade 10" },
  { activity: "Art", participants: 60, year: "2025", grade: "10" },

  // { activity: "Sports", participants: 120, year: "2023", grade: "Grade 10" },
  // { activity: "Music", participants: 80, year: "2023", grade: "Grade 10" },
  // { activity: "Drama", participants: 45, year: "2023", grade: "Grade 10" },
  // { activity: "Debate", participants: 30, year: "2023", grade: "Grade 10" },
  // { activity: "Art", participants: 60, year: "2023", grade: "10" },

  { activity: "Music", participants: 50, year: "2024", grade: "Grade 9" },
  { activity: "Drama", participants: 25, year: "2024", grade: "Grade 9" },
  { activity: "Sports", participants: 100, year: "2024", grade: " Grade 9" },

  // { activity: "Debate", participants: 20, year: "2024", grade: "Grade 8" },
  // { activity: "Art", participants: 40, year: "2024", grade: "8" },
];

const ExtracurricularActivities = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? activityData.filter(
          (d) => d.year === year && d.grade === grade
        )
      : activityData;

  const isEmpty = filteredData.length === 0;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text:
        year && grade
          ? `Activities Participation ( ${grade}, ${year})`
          : "Extracurricular Activities Participation",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: isEmpty ? ["No Data"] : filteredData.map((d) => d.activity),
      labels: { style: { color: "#F9FAFB" } },
      title: { text: "Activity", style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Participants",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    series: [
      {
        name: "Participants",
        data: isEmpty ? [0] : filteredData.map((d) => d.participants),
        color: "#34D399",
      },
    ],
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Participants: <b>{point.y}</b>",
    },
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default ExtracurricularActivities;
