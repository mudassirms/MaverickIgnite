import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Extended sample data with year and qualification
const data = [
  { month: "Jan", absenteeism: 3.2, year: "2023", qualification: "B.Ed" },
  { month: "Feb", absenteeism: 2.8, year: "2023", qualification: "B.Ed" },
  { month: "Mar", absenteeism: 3.5, year: "2023", qualification: "B.Ed" },
  { month: "Apr", absenteeism: 4.0, year: "2023", qualification: "M.Ed" },
  { month: "May", absenteeism: 3.7, year: "2023", qualification: "M.Ed" },
  { month: "Jun", absenteeism: 2.5, year: "2023", qualification: "Ph.D" },
  { month: "Jul", absenteeism: 3.0, year: "2023", qualification: "Ph.D" },
  { month: "Aug", absenteeism: 2.9, year: "2022", qualification: "B.Ed" },
  { month: "Sep", absenteeism: 3.3, year: "2022", qualification: "M.Ed" },
  { month: "Oct", absenteeism: 3.1, year: "2022", qualification: "Ph.D" },
  { month: "Nov", absenteeism: 2.7, year: "2022", qualification: "Ph.D" },
  { month: "Dec", absenteeism: 3.4, year: "2022", qualification: "Ph.D" },
];

const TeacherAbsenteeismRate = ({ year, qualification }) => {
  // Filter by year and qualification
  const filteredData = data.filter((d) => {
    const matchYear = year ? d.year === year : true;
    const matchQualification = qualification ? d.qualification === qualification : true;
    return matchYear && matchQualification;
  });

  // Maintain month order
  const monthsOrder = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const sortedData = monthsOrder.map((month) => {
    const monthData = filteredData.find((d) => d.month === month);
    return {
      month,
      absenteeism: monthData ? monthData.absenteeism : null,
    };
  });

  const chartOptions = {
    chart: {
      type: "line",
      backgroundColor: "#1F2937",
      style: {
        fontFamily: "sans-serif",
      },
    },
    title: {
      text: "Teacher Absenteeism Rate",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      categories: sortedData.map((d) => d.month),
      labels: { style: { color: "#F9FAFB" } },
      lineColor: "#4B5563",
    },
    yAxis: {
      title: {
        text: "Absenteeism (%)",
        style: { color: "#F9FAFB" },
      },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      borderColor: "#4B5563",
      style: { color: "#F9FAFB" },
      pointFormat: "Absenteeism: <b>{point.y}%</b>",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Absenteeism Rate",
        data: sortedData.map((d) => d.absenteeism),
        color: "#F472B6",
        lineWidth: 3,
        marker: { radius: 5 },
      },
    ],
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-[600px] h-[600px] max-w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* <h2 className="text-xl font-semibold text-white mb-4 text-center">
        Teacher Absenteeism Rate
      </h2> */}
      <div className="w-full h-[500px]">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </motion.div>
  );
};

export default TeacherAbsenteeismRate;
