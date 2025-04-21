// components/Teacher/SalaryRangePerformance.js

import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const salaryData = [
  { range: "20k-30k", performance: 68 },
  { range: "30k-40k", performance: 75 },
  { range: "40k-50k", performance: 82 },
  { range: "50k-60k", performance: 87 },
  { range: "60k-70k", performance: 91 },
];

const SalaryRangePerformance = () => {
  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text: "Salary Range-wise Performance",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: salaryData.map((d) => d.range),
      title: { text: "Salary Range", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      title: { text: "Performance %", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      pointFormat: "Performance: <b>{point.y}%</b>",
    },
    series: [
      {
        name: "Performance",
        data: salaryData.map((d) => d.performance),
        color: "#10B981",
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default SalaryRangePerformance;
