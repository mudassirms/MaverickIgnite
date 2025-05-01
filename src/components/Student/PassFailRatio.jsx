import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data
const allPassFailData = [
  { subject: "Math", pass: 80, fail: 20, Grade: "Grade 10", year: "2025" },
  { subject: "Science", pass: 70, fail: 30, Grade: "Grade 10", year: "2025" },
  { subject: "English", pass: 85, fail: 15, Grade: "Grade 10", year: "2025" },
  { subject: "History", pass: 80, fail: 20, Grade: "Grade 10", year: "2025" },
  { subject: "Computer", pass: 70, fail: 30, Grade: "Grade 10", year: "2023" },

  { subject: "English", pass: 85, fail: 15, Grade: "Grade 9", year: "2024" },
];

const PassFailRatio = ({ year, Grade }) => {
  const filteredData = allPassFailData.filter(
    (item) =>
      (!year || item.year === year) &&
      (!Grade || item.Grade === Grade)
  );

  const subjects = filteredData.map((item) => item.subject);
  const passData = filteredData.map((item) => item.pass);
  const failData = filteredData.map((item) => item.fail);

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "#1F2937",
    },
    title: {
      text: "Pass/Fail Ratio by Subject",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: subjects,
      title: { text: "Subjects", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Percentage of Students",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" }, format: "{value}%" },
      gridLineColor: "#374151",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      formatter: function () {
        return `<b>${this.points[0].point.category}</b><br/>` + 
          this.points
            .map(pt => `${pt.series.name}: ${pt.y}%`)
            .join("<br/>");
      }
    },
    plotOptions: {
      bar: {
        stacking: "percent",
        dataLabels: {
          enabled: true,
          format: "{y}%",
          style: { color: "#F9FAFB" },
        },
      },
    },
    legend: {
      itemStyle: { color: "#F9FAFB" },
    },
    series: [
      {
        name: "Pass",
        data: passData,
        color: "#10B981",
      },
      {
        name: "Fail",
        data: failData,
        color: "#EF4444",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-[700px] h-[600px] max-w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default PassFailRatio;
