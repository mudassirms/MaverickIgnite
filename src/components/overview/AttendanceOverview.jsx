// import { motion } from "framer-motion";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const attendanceTrendData = [
//   { name: "Jul", attendance: 91 },
//   { name: "Aug", attendance: 89 },
//   { name: "Sep", attendance: 93 },
//   { name: "Oct", attendance: 90 },
//   { name: "Nov", attendance: 94 },
//   { name: "Dec", attendance: 92 },
//   { name: "Jan", attendance: 95 },
//   { name: "Feb", attendance: 94 },
//   { name: "Mar", attendance: 96 },
//   { name: "Apr", attendance: 92 },
//   { name: "May", attendance: 93 },
//   { name: "Jun", attendance: 91 },
// ];

// const chartOptions = {
//   chart: {
//     type: "line",
//     backgroundColor: "transparent",
//     style: {
//       fontFamily: "sans-serif",
//     },
//     height: 320,
//   },
//   title: {
//     text: "Monthly Attendance Overview",
//     style: { color: "#F9FAFB", fontSize: "16px" },
//   },
//   xAxis: {
//     categories: attendanceTrendData.map((d) => d.name),
//     labels: {
//       style: { color: "#9CA3AF" },
//     },
//     lineColor: "#4B5563",
//   },
//   yAxis: {
//     title: {
//       text: "Attendance (%)",
//       style: { color: "#F9FAFB" },
//     },
//     labels: {
//       style: { color: "#9CA3AF" },
//     },
//     gridLineColor: "#374151",
//     min: 80,
//     max: 100,
//   },
//   tooltip: {
//     backgroundColor: "rgba(31, 41, 55, 0.85)",
//     borderColor: "#4B5563",
//     style: { color: "#E5E7EB" },
//     pointFormat: "Attendance: <b>{point.y}%</b>",
//   },
//   series: [
//     {
//       name: "Attendance",
//       data: attendanceTrendData.map((d) => d.attendance),
//       color: "#10B981", // Emerald
//       lineWidth: 3,
//       marker: {
//         fillColor: "#10B981",
//         lineWidth: 2,
//         radius: 4,
//       },
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
//   legend: {
//     enabled: false,
//   },
// };

// const SalesOverviewChart = () => {
//   return (
//     <motion.div
//       className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 w-full max-w-md h-[400px]"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </motion.div>
//   );
// };

// export default SalesOverviewChart;
