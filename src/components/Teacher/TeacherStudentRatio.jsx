import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Extended sample data with year and qualification
const data = [
  { class: "Class 1", ratio: 25, year: "2023", qualification: "B.Ed" },
  { class: "Class 2", ratio: 28, year: "2023", qualification: "B.Ed" },
  { class: "Class 3", ratio: 30, year: "2023", qualification: "M.Ed" },
  { class: "Class 4", ratio: 27, year: "2022", qualification: "Ph.D" },
  { class: "Class 5", ratio: 24, year: "2022", qualification: "B.Ed" },
];

const TeacherStudentRatio =  ({ year, qualification }) => {
  // Filter data
  const filteredData = data.filter((d) => {
    const matchYear = year ? d.year === year : true;
    const matchQualification = qualification ? d.qualification === qualification : true;
    return matchYear && matchQualification;
  });

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: "Teacher-Student Ratio by Class",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.class),
      labels: {
        style: { color: "#F9FAFB" },
      },
      lineColor: "#4B5563",
    },
    yAxis: {
      title: {
        text: "Ratio",
        style: { color: "#F9FAFB" },
      },
      labels: {
        style: { color: "#F9FAFB" },
      },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Ratio: <b>{point.y}</b>",
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Teacher-Student Ratio",
        data: filteredData.map((d) => d.ratio),
        color: "#6366F1",
        borderRadius: 5,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default TeacherStudentRatio;
