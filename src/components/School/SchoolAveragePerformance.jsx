import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data for all schools and years
const allPerformanceData = [
  { school: "Greenwood High", average: 72, year: "2022" },
  { school: "Greenwood High", average: 78, year: "2023" },
  { school: "Greenwood High", average: 81, year: "2024" },
  { school: "Greenwood High", average: 85, year: "2025" },
];

const SchoolYearWisePerformance = ({ year }) => {
  // Filter data based on selected year only
  const filteredData = allPerformanceData
    .filter((item) => (year ? item.year === year : true))
    .sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort by year ascending

  const chartOptions = {
    chart: {
      type: "areaspline",
      backgroundColor: "#1F2937",
    },
    title: {
      text: `Year-wise School Performance ${year}`,
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year), // Change this to year instead of school
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      title: {
        text: "Average Marks",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
      max: 100,
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      valueSuffix: "%",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Performance",
        data: filteredData.map((d) => d.average),
        color: "#38BDF8", // Tailwind sky-400
        fillOpacity: 0.5,
      },
    ],
    plotOptions: {
      areaspline: {
        marker: {
          enabled: true,
          radius: 4,
        },
      },
    },
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
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ style: { height: "400px", width: "100%" } }}
        />
      )}
    </motion.div>
  );
};

export default SchoolYearWisePerformance;
