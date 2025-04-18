import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year and grade
const performanceByParentEducation = [
  { name: "Farmer", value: 65, year: "2025", grade: "Grade 10" },
  { name: "Primary", value: 72, year: "2025", grade: "Grade 10" },
  { name: "Secondary", value: 78, year: "2025", grade: "Grade 10" },
  { name: "B.E Educated", value: 84, year: "2025", grade: "Grade 10" },
  { name: "MBA", value: 88, year: "2025", grade: "Grade 10" },
  { name: "Secondary", value: 87, year: "2022", grade: "Grade 10" },
  { name: "B.E Educated", value: 90, year: "2022", grade: "Grade 10" },
  { name: "MBA", value: 74, year: "2022", grade: "Grade 10" },
];

const PerformanceByParentEducation = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? performanceByParentEducation.filter(
          (item) => item.year === year && item.grade === grade
        )
      : performanceByParentEducation;

  if (filteredData.length === 0) {
    return (
      <p className="text-red-400 text-sm">
        No data available for {grade}, {year}.
      </p>
    );
  }

  const categories = filteredData.map((d) => d.name);
  const data = filteredData.map((d) => ({
    name: d.name,
    y: d.value,
  }));

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: year && grade
        ? `Performance by Parent Education (${grade}, ${year})`
        : "Performance by Parent Education",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories,
      title: { text: "Parent Education", style: { color: "#D1D5DB" } },
      labels: {
        style: { color: "#D1D5DB", fontSize: "11px" },
        rotation: -25,
      },
      gridLineColor: "#374151",
    },
    yAxis: {
      min: 0,
      max: 100,
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
        return `<b>${this.key}</b><br/>Average Marks: ${this.y}`;
      },
    },
    plotOptions: {
      column: {
        borderRadius: 6,
        dataLabels: {
          enabled: true,
          format: "{y}",
          style: {
            color: "#F3F4F6",
            textOutline: "none",
          },
        },
      },
    },
    series: [
      {
        name: "Average Marks",
        data: data,
        color: "#3B82F6", // Tailwind blue
      },
    ],
    legend: {
      enabled: false,
    },
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </motion.div>
  );
};

export default PerformanceByParentEducation;
