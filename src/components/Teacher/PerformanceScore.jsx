import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import StatCard from "../common/StatCard";

// Sample data with year and qualification added
const performanceData = [
  { name: "Teacher 1", performance: 85, year: "2023", qualification: "Ph.D" },
  { name: "Teacher 2", performance: 75, year: "2022", qualification: "M.Ed" },
  { name: "Teacher 3", performance: 90, year: "2023", qualification: "B.Ed" },
  { name: "Teacher 4", performance: 80, year: "2022", qualification: "Ph.D" },
];

const PerformanceScore = ({ year, qualification }) => {
  // 🔍 Filter data based on props
  const filteredData = performanceData.filter((d) => {
    const matchYear = year ? d.year === year : true;
    const matchQualification = qualification ? d.qualification === qualification : true;
    return matchYear && matchQualification;
  });

  // Calculate average performance for StatCard
  // const averagePerformance =
  //   filteredData.length > 0
  //     ? Math.round(
  //         filteredData.reduce((sum, d) => sum + d.performance, 0) / filteredData.length
  //       )
  //     : 0;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: { fontFamily: "sans-serif" },
      height: 400,
    },
    title: { text: null },
    xAxis: {
      categories: filteredData.map((d) => d.name),
      labels: { style: { color: "#F9FAFB" } },
      lineColor: "#4B5563",
    },
    yAxis: {
      min: 0,
      title: {
        text: "Performance (%)",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      valueSuffix: "%",
    },
    legend: { enabled: false },
    plotOptions: {
      column: {
        borderRadius: 4,
        pointPadding: 0.2,
        groupPadding: 0.1,
      },
    },
    series: [
      {
        name: "Performance",
        data: filteredData.map((d) => d.performance),
        color: "#6366F1",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="mb-6">
      {/* StatCard for Performance Score
      <StatCard
        name="Teacher Performance Score"
        icon="BarChart"
        value={`${averagePerformance}%`}
        color="#6366F1"
      /> */}

      {/* Highcharts for visualizing Teacher Performance */}
      <motion.div
        className="mt-4 p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Teacher Performance by Score</h3>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </motion.div>
    </div>
  );
};

export default PerformanceScore;


