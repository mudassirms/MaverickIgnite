import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year and grade added
const averageMarksByClassData = [
  
  { className: "Grade 5", averageMarks: 92, year: "2025", grade: "Grade 5" },
  { className: "Grade 6", averageMarks: 78, year: "2025", grade: "Grade 6" },
  { className: "Grade 7", averageMarks: 80, year: "2025", grade: "Grade 7" },
  { className: "Grade 8", averageMarks: 87, year: "2025", grade: "Grade 8" },
  { className: "Grade 9", averageMarks: 70, year: "2025", grade: "Grade 9" },
  { className: "Grade 10", averageMarks: 78, year: "2025", grade: "Grade 10" },
];

const AverageMarksByClass = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? averageMarksByClassData.filter((d) => d.year === year && d.grade === grade)
      : averageMarksByClassData;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: year && grade ? `Average Marks by Class (${grade}, ${year})` : "Average Marks by Class",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.className),
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      title: {
        text: "Average Marks",
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
        return `<b>${this.x}</b><br/>Average Marks: ${this.y}`;
      },
    },
    series: [
      {
        name: "Average Marks",
        data: filteredData.map((d) => d.averageMarks),
        color: "#10B981", // Emerald green
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{ width: "500px", height: "500px" }}
    >

      {filteredData.length === 0 ? (
        <p className='text-red-400 text-sm'>No data for {grade}, {year}.</p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default AverageMarksByClass;
