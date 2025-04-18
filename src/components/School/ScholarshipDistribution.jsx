// import { motion } from "framer-motion";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// // Sample scholarship data with year and school type for filtering
// const allScholarshipData = [
//   { school: "Greenwood High", scholarship: 70, type: "Private", year: "2025" },
//   { school: "Oakridge School", scholarship: 50, type: "Public", year: "2024" },
//   { school: "Sunrise Public", scholarship: 40, type: "Public", year: "2025" },
//   { school: "Hilltop Academy", scholarship: 60, type: "Private", year: "2025" },
//   { school: "Riverdale School", scholarship: 30, type: "Charter", year: "2024" },
// ];

// const ScholarshipDistribution = ({ year, schoolType }) => {
//   // Filter data based on selected year and school type
//   const filteredData = allScholarshipData.filter(
//     (item) =>
//       (year ? item.year === year : true) && (schoolType ? item.type === schoolType : true)
//   );

//   const chartOptions = {
//     chart: {
//       type: "pie",
//       backgroundColor: "#1F2937",
//       style: {
//         fontFamily: "sans-serif",
//       },
//     },
//     title: {
//       text: "Scholarship Distribution",
//       style: { color: "#F9FAFB" },
//     },
//     tooltip: {
//       backgroundColor: "#111827",
//       borderColor: "#4B5563",
//       style: { color: "#F9FAFB" },
//       pointFormat: "{point.name}: <b>{point.y}%</b>",
//     },
//     plotOptions: {
//       pie: {
//         allowPointSelect: true,
//         cursor: "pointer",
//         dataLabels: {
//           enabled: true,
//           format: "{point.name}: {point.y}%",
//           style: { color: "#F9FAFB" },
//         },
//       },
//     },
//     series: [
//       {
//         name: "Scholarships Provided",
//         data: [
//           {
//             name: "Providing Scholarships",
//             y: filteredData.filter((d) => d.scholarship >= 50).length * 100 / filteredData.length,
//             color: "#10B981", // Green
//           },
//           {
//             name: "Not Providing Scholarships",
//             y: 100 - (filteredData.filter((d) => d.scholarship >= 50).length * 100 / filteredData.length),
//             color: "#EF4444", // Red
//           },
//         ],
//       },
//     ],
//     credits: {
//       enabled: false,
//     },
//   };

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//     </motion.div>
//   );
// };

// export default ScholarshipDistribution;
