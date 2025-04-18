import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data for infrastructure score
const allInfrastructureData = [
  {  score: 85, type: "Private", year: "2025" },
  {  score: 78, type: "Public", year: "2024" },
  {  score: 90, type: "Public", year: "2023" },
  {  score: 82, type: "Private", year: "2022" },
  {  score: 75, type: "Charter", year: "2021" },
];

// Utility to compute average score per year
const getAverageScoresByYear = (data) => {
  const yearMap = {};

  data.forEach(({ year, score }) => {
    if (!yearMap[year]) {
      yearMap[year] = { total: 0, count: 0 };
    }
    yearMap[year].total += score;
    yearMap[year].count += 1;
  });

  return Object.entries(yearMap).map(([year, { total, count }]) => ({
    year,
    avgScore: total / count,
  }));
};

const InfrastructureScore = ({ year }) => {
  // Filter by year if provided
  const filteredData = year
    ? allInfrastructureData.filter((item) => item.year === year)
    : allInfrastructureData;

  const aggregated = getAverageScoresByYear(filteredData);

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "#1F2937",
      style: { fontFamily: "sans-serif" },
    },
    title: {
      text: "Average Infrastructure Score by Year",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: aggregated.map((d) => d.year),
      title: { text: "Year", style: { color: "#F9FAFB" } },
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
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Avg Score: <b>{point.y:.1f}</b>",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Average Infrastructure Score",
        data: aggregated.map((d) => parseFloat(d.avgScore.toFixed(1))),
        color: "#34D399",
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
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default InfrastructureScore;
