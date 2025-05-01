import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample subject-wise performance data with year and grade
const subjectPerformanceData = [
  { name: "Math", marks: 90, year: "2025", grade: "Grade 10" },
  { name: "Science", marks: 50, year: "2025", grade: "Grade 10" },
  { name: "English", marks: 74, year: "2025", grade: "Grade 10" },
  { name: "History", marks: 69, year: "2025", grade: "Grade 10" },
  { name: "Geography", marks: 45, year: "2025", grade: "Grade 10" },
  { name: "Computer", marks: 88, year: "2025", grade: "Grade 10" },
  // { name: "Computer", marks: 75, year: "2025", grade: "Grade 10" },
  
];

const SubjectWisePerformance = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? subjectPerformanceData.filter((item) => item.year === year && item.grade === grade)
      : subjectPerformanceData;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: year && grade ? `Subject-wise Performance (${grade}, ${year})` : "Subject-wise Performance",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: filteredData.map((item) => item.name),
      labels: { style: { color: "#D1D5DB" } },
      title: { text: "Subjects", style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Marks (%)",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#1F2937", // Tooltip background color
      borderColor: "#4B5563", // Tooltip border color
      style: { color: "#E5E7EB" }, // Tooltip text color
      formatter: function () {
        return `<b>${this.point.category}</b>: ${this.y}%`; // this.point.category gives the subject name
      },
    },
    series: [
      {
        name: "Marks",
        data: filteredData.map((item) => item.marks),
        color: "#3B82F6",
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
    

      {filteredData.length === 0 ? (
        <p className='text-red-400 text-sm'>
          No data available for {grade}, {year}.
        </p>
      ) : (
        <div style={{ width: "100%", height: "300px" }}>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      )}
    </motion.div>
  );
};

export default SubjectWisePerformance;
