import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year and vacancy rate
const allVacancyData = [
  { year: "2025", vacancy: 10 },
  { year: "2024", vacancy: 12 },
  { year: "2023", vacancy: 7 },
  { year: "2022", vacancy: 15 },
  { year: "2021", vacancy: 21 },
];

const TeacherVacancyRate = ({ year }) => {
  // Filter the vacancy data based on selected year
  const filteredData = allVacancyData.filter((item) => (year ? item.year === year : true));

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: `Teacher Vacancy Rate ${year}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year), // X-axis now shows the year
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      title: {
        text: "Number of Vacancy",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
      max: 50,
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Vacancy: <b>{point.y}</b>",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Vacancy",
        data: filteredData.map((d) => d.vacancy),
        color: "#FBBF24", // Amber/yellow for attention
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
        <p className="text-red-400 text-sm">No data found for year {year}.</p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default TeacherVacancyRate;
