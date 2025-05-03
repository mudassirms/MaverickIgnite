import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data with year and grade
const performanceByReligion = [
  { name: "General", avgMarks: 78, year: "2025", grade: "Grade 10" },
  { name: "OBC", avgMarks: 68, year: "2025", grade: "Grade 10" },
  { name: "SC", avgMarks: 80, year: "2025", grade: "Grade 10" },
  { name: "ST", avgMarks: 75, year: "2025", grade: "Grade 10" },
  { name: "2B", avgMarks: 77, year: "2025", grade: "Grade 10" },

  { name: "General", avgMarks: 72, year: "2024", grade: "Grade 9" },
  { name: "OBC", avgMarks: 65, year: "2024", grade: "Grade 9" },
  { name: "SC", avgMarks: 78, year: "2024", grade: "Grade 9" },
  { name: "ST", avgMarks: 73, year: "2024", grade: "Grade 9" },
  { name: "2B", avgMarks: 75, year: "2024", grade: "Grade 9" },
];

const PerformanceByReligionCast = ({ year, grade }) => {
  // Filter data by the selected year
  const filteredData =
    year
      ? performanceByReligion.filter((item) => item.year === year)
      : performanceByReligion; // If no year is selected, show data for all years

  if (filteredData.length === 0) {
    return (
      <p className="text-red-400 text-sm">
        No data available for {grade}, {year}.
      </p>
    );
  }

  // If no grade filter is applied, aggregate data by averaging marks for each religion/caste type across all grades
  const aggregatedData = grade
    ? filteredData.filter(item => item.grade === grade) // If grade is selected, filter data by grade
    : filteredData.reduce((acc, current) => {
        const existing = acc.find(item => item.name === current.name);
        if (existing) {
          existing.avgMarks += current.avgMarks; 
          existing.count += 1; // Count occurrences
        } else {
          acc.push({ ...current, count: 1 }); 
        }
        return acc;
      }, []).map(item => ({
        name: item.name,
        avgMarks: item.avgMarks / item.count, 
      }));

  const categories = aggregatedData.map((d) => d.name);
  const data = aggregatedData.map((d) => ({
    name: d.name,
    y: d.avgMarks,
  }));

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: year && grade
        ? `Performance by Religion/Caste (${grade}, ${year})`
        : "Performance by Religion/Caste (Overall)",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories,
      title: { text: "Religion/Caste", style: { color: "#D1D5DB" } },
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

export default PerformanceByReligionCast;
