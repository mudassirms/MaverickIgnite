import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InternalExamPerformance = ({ performanceData }) => {
  // Prepare the data for the three exams
  const seriesData = [
    {
      name: "Pre Mid Term",
      data: performanceData.map((d) => ({
        y: d.scores[0],
        name: `Grade ${d.class}`,
      })),
      color: "#10B981", // Green
    },
    {
      name: "Mid Term",
      data: performanceData.map((d) => ({
        y: d.scores[1],
        name: `Grade ${d.class}`,
      })),
      color: "#4B5563", // Grayish
    },
    {
      name: "Post Mid Term",
      data: performanceData.map((d) => ({
        y: d.scores[2],
        name: `Grade ${d.class}`,
      })),
      color: "#3B82F6", // Blue
    },
  ];

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Internal Exam Performance",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: performanceData.map((d) => `Grade ${d.class}`),
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#E5E7EB",
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
        return `<b>${this.point.name}</b><br/>${this.series.name}: ${this.y}%`;
      },
    },
    series: seriesData,
    credits: { enabled: false },
    legend: {
      enabled: true,
      itemStyle: {
        color: "#FFFFFF",
      },
    },
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

export default InternalExamPerformance;
