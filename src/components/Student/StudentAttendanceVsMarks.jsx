import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sample data – includes year and grade
const attendanceData = [
  { attendance: 95, marks: 88, year: "2025", grade: "Grade 10" },
  { attendance: 92, marks: 82, year: "2025", grade: "Grade 10" },
  { attendance: 85, marks: 78, year: "2025", grade: "Grade 10" },
  { attendance: 75, marks: 70, year: "2025", grade: "Grade 10" },
  { attendance: 98, marks: 92, year: "2025", grade: "Grade 10" },

  { attendance: 60, marks: 55, year: "2022", grade: "Grade 10" },

  { attendance: 60, marks: 55, year: "2022", grade: "Grade 9" },
  { attendance: 88, marks: 80, year: "2022", grade: "Grade 9" },
  { attendance: 70, marks: 65, year: "2022", grade: "Grade 9" },
  { attendance: 82, marks: 74, year: "2022", grade: "Grade 9" },
  { attendance: 90, marks: 85, year: "2022", grade: "Grade 9" },
];

const StudentAttendanceVsMarks = ({ year, grade }) => {
  const filteredData =
    year && grade
      ? attendanceData.filter((item) => item.year === year && item.grade === grade)
      : attendanceData;

  const chartOptions = {
    chart: {
      type: "scatter",
      zoomType: "xy",
      backgroundColor: "transparent",
    },
    title: {
      text: year && grade ? `Attendance vs Marks (${grade}, ${year})` : "Attendance vs Marks",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      title: {
        enabled: true,
        text: "Attendance (%)",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      title: {
        text: "Marks (%)",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "rgba(31, 41, 55, 0.85)",
      borderColor: "#4B5563",
      style: { color: "#E5E7EB" },
      formatter: function () {
        return `<b>Attendance:</b> ${this.x}%<br/><b>Marks:</b> ${this.y}%`;
      },
    },
    series: [
      {
        name: "Students",
        color: "#3B82F6",
        data: filteredData.map((d) => [d.attendance, d.marks]),
      },
    ],
    credits: { enabled: false },
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

export default StudentAttendanceVsMarks;
