import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data for fee collection efficiency (only for one school)
const allFeeData = [
  { school: "High School", efficiency: 96, year: "2021" },
  { school: "High School", efficiency: 89, year: "2022" },
  { school: "High School", efficiency: 92, year: "2023" },
  { school: "High School", efficiency: 85, year: "2024" },
  { school: "High School", efficiency: 91, year: "2025" },
];

const FeeCollectionEfficiency = ({ year }) => {
  // If no year is selected, display overall data (combine all years)
  const filteredData = year
    ? allFeeData.filter((item) => item.year === year)
    : allFeeData;

  // If no data is found for the selected year or overall, return a message or empty chart
  if (filteredData.length === 0) {
    return <div>No data available for the selected year.</div>;
  }

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: year ? `Fee Collection Efficiency ${year}` : "Overall Fee Collection Efficiency",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.year),
      title: {
        // text: "Year",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Efficiency (%)",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Efficiency: <b>{point.y}%</b>",
    },
    plotOptions: {
      column: {
        borderRadius: 5,
        dataLabels: {
          enabled: true,
          style: { color: "#F9FAFB" },
          format: "{y}%",
        },
      },
    },
    series: [
      {
        name: "Year",
        data: filteredData.map((d) => d.efficiency),
        color: "#b791c9 ",
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

export default FeeCollectionEfficiency;
