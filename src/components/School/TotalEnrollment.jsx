import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample enrollment data for one school (no schoolType filtering)
const allEnrollmentData = [
  { year: "2024", enrollment: 850 },
  { year: "2025", enrollment: 920 },
  { year: "2023", enrollment: 880 },
  { year: "2022", enrollment: 970 },
  { year: "2021", enrollment: 1030 },
  // { year: "2023", enrollment: 1100 },
];

const TotalEnrollment = ({ year }) => {
  // Filter the enrollment data based on the selected year
  const filteredData = allEnrollmentData.filter((item) => (year ? item.year === year : true));

  const chartOptions = {
    chart: {
      type: "area",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: `Total Enrollment Over Years ${year}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year),
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      lineColor: "#4B5563",
    },
    yAxis: {
      title: {
        text: "Enrollment",
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
      pointFormat: "<b>{point.y} students</b>",
    },
    series: [
      {
        name: "Enrollment",
        data: filteredData.map((d) => d.enrollment),
        color: "#3B82F6",
        fillOpacity: 0.3,
      },
    ],
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
      {filteredData.length === 0 ? (
        <p className="text-red-400 text-sm">No data found for year {year}.</p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default TotalEnrollment;
