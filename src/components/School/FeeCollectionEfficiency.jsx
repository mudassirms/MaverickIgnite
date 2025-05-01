import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data for fee collection efficiency
const allFeeData = [
  { school: "High School", efficiency: 96, year: "2021" },
  { school: "High School", efficiency: 89, year: "2022" },
  { school: "High School", efficiency: 92, year: "2023" },
  { school: "High School", efficiency: 85, year: "2024" },
  { school: "High School", efficiency: 91, year: "2025" },
];

const FeeCollectionEfficiency = ({ year }) => {
  const filteredData = allFeeData.filter((item) => (year ? item.year === year : true));

  const chartOptions = {
    chart: {
      type: "areaspline",
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
      title: { text: "Year", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      lineColor: "#4B5563",
    },
    yAxis: {
      title: {
        text: "Efficiency (%)",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      headerFormat: "<b>{point.key}</b><br/>", // Show the year in the header
      pointFormat: "Efficiency: <b>{point.y}%</b>", // Display efficiency
      useHTML: true,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: !!year,  // Enable markers if a year is selected, else hide
          radius: 5,         // Slightly bigger dots
          fillColor: "#b791c9",
          lineWidth: 2,
          lineColor: "#b791c9",
          states: {
            hover: {
              enabled: true,
              lineWidthPlus: 0,
            },
          },
        },
      },
      areaspline: {
        fillOpacity: 0.3,
      },
    },
    series: [
      {
        name: "Efficiency",
        data: filteredData.map((d) => d.efficiency),
        color: "#b791c9",
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

export default FeeCollectionEfficiency;
