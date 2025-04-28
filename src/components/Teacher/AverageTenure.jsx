// import { motion } from "framer-motion";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// // Sample extended dataset with year and qualification
// const teacherData = [
//   { teacher: "Mr. Kumar", tenure: 5, year: "2023", qualification: "M.Ed" },
//   { teacher: "Ms. Patel", tenure: 3, year: "2022", qualification: "B.Ed" },
//   { teacher: "Mr. Reddy", tenure: 8, year: "2023", qualification: "Ph.D" },
//   { teacher: "Mrs. Sharma", tenure: 6, year: "2022", qualification: "M.Ed" },
//   { teacher: "Ms. Nair", tenure: 4, year: "2023", qualification: "B.Ed" },
// ];

// const AverageTenure = ({ year, qualification }) => {
//   const filteredData = teacherData.filter((d) => {
//     const matchYear = year ? d.year === year : true;
//     const matchQualification = qualification ? d.qualification === qualification : true;
//     return matchYear && matchQualification;
//   });

//   const chartOptions = {
//     chart: {
//       type: "column",
//       backgroundColor: "#1F2937",
//       style: { fontFamily: "sans-serif" },
//     },
//     title: { text: null },
//     xAxis: {
//       categories: filteredData.map((d) => d.teacher),
//       labels: { style: { color: "#F9FAFB" } },
//       lineColor: "#4B5563",
//     },
//     yAxis: {
//       title: { text: "Years", style: { color: "#F9FAFB" } },
//       labels: { style: { color: "#F9FAFB" } },
//       gridLineColor: "#374151",
//     },
//     tooltip: {
//       backgroundColor: "#111827",
//       borderColor: "#4B5563",
//       style: { color: "#F9FAFB" },
//       pointFormat: "Tenure: <b>{point.y} years</b>",
//     },
//     legend: { enabled: false },
//     series: [
//       {
//         name: "Tenure",
//         data: filteredData.map((d) => d.tenure),
//         color: "#FBBF24",
//       },
//     ],
//     credits: { enabled: false },
//   };

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-[600px] h-[600px] max-w-full mx-auto"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <h2 className="text-xl font-semibold text-white mb-4 text-center">
//         Average Teacher Tenure (Years)
//       </h2>
//       <div className="w-full h-[500px]">
//         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//       </div>
//     </motion.div>
//   );
// };

// export default AverageTenure;
