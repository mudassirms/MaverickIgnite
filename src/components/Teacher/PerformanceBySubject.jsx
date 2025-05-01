import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data including year and qualification
const data = [
  { subject: "Math", score: 82, year: "2025", qualification: "B.Ed" },
  { subject: "Science", score: 76, year: "2025", qualification: "B.Ed" },
  { subject: "English", score: 88, year: "2025", qualification: "M.Ed" },
  { subject: "History", score: 70, year: "2025", qualification: "M.Ed" },
  { subject: "Geography", score: 75, year: "2025", qualification: "Ph.D" },
  { subject: "Computer", score: 90, year: "2025", qualification: "Ph.D" },
  { subject: "Math", score: 85, year: "2024", qualification: "B.Ed" },
  { subject: "Science", score: 80, year: "2024", qualification: "M.Ed" },
  { subject: "English", score: 92, year: "2024", qualification: "Ph.D" },
  { subject: "History", score: 74, year: "2024", qualification: "B.Ed" },
  { subject: "Geography", score: 78, year: "2024", qualification: "M.Ed" },
  { subject: "Computer", score: 94, year: "2024", qualification: "Ph.D" },
];

// Aggregate scores by subject
const aggregateData = (data) => {
  const subjectScores = {};

  data.forEach(({ subject, score }) => {
    if (!subjectScores[subject]) subjectScores[subject] = [];
    subjectScores[subject].push(score);
  });

  return Object.entries(subjectScores).map(([subject, scores]) => ({
    subject,
    score: Math.round(scores.reduce((sum, val) => sum + val, 0) / scores.length),
  }));
};

const PerformanceBySubject = ({ year, qualification }) => {
  const filteredData = data.filter((d) => {
    const matchYear = year ? d.year === year : true;
    const matchQualification = qualification ? d.qualification === qualification : true;
    return matchYear && matchQualification;
  });

  const averagedData = aggregateData(filteredData);

  const chartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "#1F2937",
    },
    title: {
      text: "Average Performance by Subject",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: averagedData.map((d) => d.subject),
      title: { text: null },
      labels: { style: { color: "#F9FAFB" } },
      tickWidth: 0, // Removes ticks from x-axis
    },
    yAxis: {
      min: 0,
      title: { text: "Average Score", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      valueSuffix: " marks",
      formatter: function () {
        const subjectName = this.point.category; // Get subject from categories
        const averageScore = this.y; // Get the average score for the subject
        return `<b>${subjectName}</b>: ${averageScore}%`; // Display subject and average score
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        color: "#60A5FA",
        dataLabels: {
          enabled: true,
          style: { color: "#F9FAFB" },
        },
      },
    },
    series: [
      {
        name: "", // Remove series name so it doesn't appear in the legend
        data: averagedData.map((d) => d.score),
        color: "#34D399",
        enableMouseTracking: true, // Enable mouse tracking to show tooltips
      },
    ],
    credits: { enabled: false },
    legend: {
      enabled: false, // Disable the legend to remove series name dot
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 700,
          },
          chartOptions: {
            chart: {
              height: "100%",
            },
          },
        },
      ],
    },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-[600px] h-[600px] max-w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full h-[500px]">
        {averagedData.length === 0 ? (
          <p className="text-gray-400 text-center">No data available for the selected filters.</p>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceBySubject;
