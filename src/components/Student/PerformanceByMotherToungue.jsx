import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Color palette mapped to languages
const COLORS = {
  Hindi: "#6366F1",   // Indigo
  English: "#10B981", // Emerald
  Marathi: "#F59E0B", // Amber
  Telugu: "#3B82F6",  // Blue
  Tamil: "#EC4899",   // Pink
  Default: "#A78BFA", // Violet
};

const motherTongueData = [
  { language: "Hindi", avgMarks: 76, year: "2025", grade: "Grade 10" },
  { language: "English", avgMarks: 82, year: "2025", grade: "Grade 10" },
  { language: "Marathi", avgMarks: 74, year: "2025", grade: "Grade 10" },
  { language: "Telugu", avgMarks: 79, year: "2025", grade: "Grade 10" },
  { language: "Tamil", avgMarks: 81, year: "2025", grade: "Grade 10" },
  { language: "Hindi", avgMarks: 98, year: "2022", grade: "Grade 9" },
  { language: "English", avgMarks: 82, year: "2022", grade: "Grade 9" },
  { language: "Marathi", avgMarks: 65, year: "2022", grade: "Grade 9" },
  { language: "Telugu", avgMarks: 80, year: "2022", grade: "Grade 9" },
  { language: "Tamil", avgMarks: 63, year: "2022", grade: "Grade 9" },
];

const PerformanceByMotherTongue = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? motherTongueData.filter((item) => item.year === year && item.grade === grade)
      : motherTongueData;

  if (filteredData.length === 0) {
    return (
      <p className="text-red-400 text-sm">
        No data for {grade}, {year}.
      </p>
    );
  }

  // Group by language and compute average
  const languageGroups = {};
  filteredData.forEach(({ language, avgMarks }) => {
    if (!languageGroups[language]) languageGroups[language] = [];
    languageGroups[language].push(avgMarks);
  });

  const chartData = Object.keys(languageGroups).map((lang) => ({
    name: lang,
    y:
      languageGroups[lang].reduce((sum, mark) => sum + mark, 0) /
      languageGroups[lang].length,
    color: COLORS[lang] || COLORS.Default,
  }));

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text: year && grade
        ? `Performance by Mother Tongue – ${grade}, ${year}`
        : "Overall Performance by Mother Tongue",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: chartData.map((d) => d.name),
      title: { text: "Language", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Average Marks",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
    },
    tooltip: {
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      pointFormat: "<b>{point.y:.1f}</b> average marks",
    },
    series: [
      {
        name: "Average Marks",
        data: chartData,
      },
    ],
    plotOptions: {
      column: {
        borderRadius: 6,
        dataLabels: {
          enabled: true,
          format: "{y:.1f}",
          style: { color: "#F9FAFB" },
        },
      },
    },
    legend: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </motion.div>
  );
};

export default PerformanceByMotherTongue;
