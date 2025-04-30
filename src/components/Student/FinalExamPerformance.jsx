import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FinalExamPerformance = ({ performanceData }) => {
  // Dynamically generate grade labels from performanceData
  const gradeLabels = performanceData.map((d) => `Grade ${d.class}`);

  // Prepare data with custom point names for tooltips
  const seriesData = performanceData.map((d) => ({
    y: d.performance,
    name: `Grade ${d.class}`,
  }));

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
      categories: gradeLabels,
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
      title: { text: "Grade", style: { color: "#D1D5DB" } },
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
        return `<b>${this.point.name}</b><br/>Performance: ${this.y}%`;
      },
    },
    series: [
      {
        name: "Performance",
        data: seriesData,
        color: "#10B981",
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
