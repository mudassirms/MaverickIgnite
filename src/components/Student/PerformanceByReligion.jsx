import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const performanceByReligion = [
  { name: "General", avgMarks: 78, year: "2025", grade: "Grade 10" },
  { name: "OBC", avgMarks: 68, year: "2025", grade: "Grade 10" },
  { name: "SC", avgMarks: 80, year: "2025", grade: "Grade 10" },
  { name: "ST", avgMarks: 75, year: "2025", grade: "Grade 10" },
  { name: "Minority", avgMarks: 77, year: "2025", grade: "Grade 10" },

  { name: "SC", avgMarks: 74, year: "2022", grade: "Grade 10" },
  { name: "ST", avgMarks: 98, year: "2022", grade: "Grade 10" },
  { name: "Minority", avgMarks: 80, year: "2022", grade: "Grade 10" },

  { name: "General", avgMarks: 72, year: "2022", grade: "Grade 9" },
  { name: "OBC", avgMarks: 65, year: "2022", grade: "Grade 9" },
  { name: "SC", avgMarks: 78, year: "2022", grade: "Grade 9" },
  { name: "ST", avgMarks: 73, year: "2022", grade: "Grade 9" },
  { name: "Minority", avgMarks: 75, year: "2022", grade: "Grade 9" },
];

const PerformanceByReligionCast = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? performanceByReligion.filter(
          (item) => item.year === year && item.grade === grade
        )
      : performanceByReligion;

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      scrollablePlotArea: {
        minWidth: 700, // Scroll enabled if chart width exceeds this
        scrollPositionX: 0,
      },
    },
    title: {
      text:
        year && grade
          ? `Performance by Religion/Caste (${grade}, ${year})`
          : "Performance by Religion/Caste",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: filteredData.map((d) => d.name),
      labels: {
        style: { color: "#D1D5DB", fontSize: "11px" },
        rotation: -25,
      },
      gridLineColor: "#374151",
    },
    yAxis: {
      title: {
        text: "Avg Marks",
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
        name: "Cast",
        data: filteredData.map((d) => d.avgMarks),
        color: "#6366F1",
        dataLabels: {
          enabled: true,
          style: {
            color: "#F3F4F6",
            textOutline: "none",
          },
        },
      },
    ],
    legend: {
      itemStyle: { color: "#D1D5DB" },
    },
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {filteredData.length === 0 ? (
        <p className="text-red-400 text-sm">
          No data available for {grade}, {year}.
        </p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </motion.div>
  );
};

export default PerformanceByReligionCast;
