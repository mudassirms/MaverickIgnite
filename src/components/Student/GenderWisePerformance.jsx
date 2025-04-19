import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const COLORS = {
  Male: "#6366F1",
  Female: "#EC4899",
  Other: "#F59E0B",
};

// Sample dataset
const genderPerformanceData = [
  { gender: "Male", score: 76, year: "2025", grade: "Grade 10" },
  { gender: "Female", score: 82, year: "2025", grade: "Grade 10" },
  { gender: "Other", score: 70, year: "2025", grade: "Grade 10" },
  { gender: "Female", score: 88, year: "2025", grade: "Grade 10" },
  { gender: "Other", score: 74, year: "2025", grade: "Grade 10" },
  { gender: "Male", score: 65, year: "2024", grade: "Grade 9" },
  { gender: "Female", score: 77, year: "2024", grade: "Grade 9" },
  { gender: "Other", score: 68, year: "2024", grade: "Grade 9" },
];

const GenderAvgScoreChart = ({ year, grade }) => {
  // Filter if year and grade provided
  const filteredData = year && grade
    ? genderPerformanceData.filter(
        (item) => item.year === year && item.grade === grade
      )
    : genderPerformanceData;

  if (filteredData.length === 0) {
    return (
      <div className="text-red-400">
        No data available for {grade}, {year}.
      </div>
    );
  }

  // Group and average scores by gender
  const genderGroups = {};
  filteredData.forEach(({ gender, score }) => {
    if (!genderGroups[gender]) genderGroups[gender] = [];
    genderGroups[gender].push(score);
  });

  const chartData = Object.keys(genderGroups).map((gender) => ({
    name: gender,
    y:
      genderGroups[gender].reduce((sum, val) => sum + val, 0) /
      genderGroups[gender].length,
    color: COLORS[gender],
  }));

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text: year && grade
        ? `Avg Score by Gender (${grade}, ${year})`
        : "Overall Avg Score by Gender",
      style: { color: "#F7FAFB" },
    },
    xAxis: {
      categories: chartData.map((d) => d.name),
      title: { text: "Gender", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Average Score",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
    },
    tooltip: {
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      pointFormat: "<b>{point.y:.1f}</b> average score",
    },
    series: [
      {
        name: "Average Score",
        data: chartData,
      },
    ],
    plotOptions: {
      column: {
        borderRadius: 6,
        dataLabels: {
          enabled: true,
          format: "{y:.1f}",
          style: { color: "#F9FAFB" },
        },
      },
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </motion.div>
  );
};

export default GenderAvgScoreChart;
