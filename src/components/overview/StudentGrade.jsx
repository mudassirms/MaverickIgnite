// import { motion } from "framer-motion";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const STUDENT_DISTRIBUTION = [
//   { name: "Grade 6", value: 180 },
//   { name: "Grade 7", value: 200 },
//   { name: "Grade 8", value: 220 },
//   { name: "Grade 9", value: 210 },
//   { name: "Grade 10", value: 190 },
// ];

// const chartOptions = {
//   chart: {
//     type: "column", // Column chart (Bar chart equivalent)
//     backgroundColor: "#1F2937",
//     style: {
//       fontFamily: "sans-serif",
//     },
//     height: 250, 
//     width: 400, 
//   },
//   title: {
//     text: "Students per Grade",
//     style: { color: "#F9FAFB" },
//   },
//   xAxis: {
//     categories: STUDENT_DISTRIBUTION.map((d) => d.name),
//     labels: {
//       style: { color: "#9ca3af" },
//     },
//     lineColor: "#4B5563",
//   },
//   yAxis: {
//     title: {
//       text: "Number of Students",
//       style: { color: "#F9FAFB" },
//     },
//     labels: {
//       style: { color: "#9ca3af" },
//     },
//     gridLineColor: "#374151",
//   },
//   tooltip: {
//     backgroundColor: "rgba(31, 41, 55, 0.8)",
//     borderColor: "#4B5563",
//     style: { color: "#E5E7EB" },
//     pointFormat: "Students: <b>{point.y}</b>",
//   },
//   series: [
//     {
//       name: "Students",
//       data: STUDENT_DISTRIBUTION.map((d) => d.value),
//       color: "#6366F1", 
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
// };

// const StudentsPerGradeChart = () => {
//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700 max-w-3xl mx-auto" 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <div className="h-72"> 
//         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//       </div>
//     </motion.div>
//   );
// };

// export default StudentsPerGradeChart;
