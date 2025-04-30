import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FinalExamPerformance = ({ performanceData }) => {
  // Mapping grades directly to "Grade 1", "Grade 2", etc.
  const gradeLabels = ["Grade 5", "Grade 6", "Grade 7", "Grade 8"];

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Final Exam Performance",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: gradeLabels.slice(0, performanceData.length), // Match data length
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      title: {
        text: "Performance (%)",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "rgba(31, 41, 55, 0.85)",
      borderColor: "#4B5563",
      style: { color: "#E5E7EB" },
      formatter: function () {
        return `<b>${this.x}</b><br/>Performance: ${this.y}%`;
      },
    },
    series: [
      {
        name: "Performance",
        data: performanceData.map((d) => d.performance),
        color: "#10B981", // Emerald green
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{ width: "500px", height: "500px" }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default FinalExamPerformance;
