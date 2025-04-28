import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import StatCard from "../common/StatCard";

// Sample data with qualification and year attributes
const performanceData = [
  { qualification: "B.Ed", performance: 85, year: "2025" },
  { qualification: "M.Ed", performance: 90, year: "2025" },
  { qualification: "Ph.D", performance: 95, year: "2025" },
  { qualification: "B.Ed", performance: 88, year: "2024" },
  { qualification: "M.Ed", performance: 92, year: "2024" },
  { qualification: "Ph.D", performance: 97, year: "2024" },
];

const PerformanceByQualification = ({ year, qualification }) => {
 
  const filteredData = performanceData.filter((d) => {
    const matchYear = year ? d.year === year : true;
    const matchQualification = qualification ? d.qualification === qualification : true;
    return matchYear && matchQualification;
  });

 
  console.log("Filtered Data: ", filteredData);

 
  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: { fontFamily: "sans-serif" },
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: filteredData.map((d) => d.qualification),
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
    legend: {
      itemStyle: { color: "#F9FAFB" },
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      valueSuffix: "%",
    },
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
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="mb-8">
      {/* StatCard for Performance by Qualification */}
      {/* <StatCard
        name="Performance by Qualification"
        icon="BookOpen" 
        value={`${filteredData.length > 0 ? filteredData[0].performance : 0}%`} // Display performance for the first qualification in filtered data
        color="#6366F1"
      /> */}

      {/* Highcharts with framer-motion for visualizing Performance by Qualification */}
      <motion.div
        className="mt-4 p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Performance by Qualification</h3>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            ...chartOptions,
            chart: {
              ...chartOptions.chart,
              height: 400, // Increased height of the chart
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default PerformanceByQualification;
