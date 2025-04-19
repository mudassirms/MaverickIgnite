// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell } from "recharts";

// // Sample data for schools with dropout rates
// const allDropoutData = [
//   { dropout: 2.5, year: "2025" },
//   { dropout: 3.0, year: "2024" },
//   { dropout: 1.8, year: "2024" },
//   { dropout: 3.1, year: "2025" },
//   { dropout: 2.0, year: "2025" },
//   { dropout: 2.7, year: "2024" },
//   { dropout: 2.7, year: "2023" },
// ];

// // Gauge colors
// const COLORS = ["#F87171", "#374151"]; // red + gray

// // Calculate average dropout for a specific year
// const getAverageDropout = (year) => {
//   const filteredData = allDropoutData.filter((item) => item.year === year);
//   const totalDropout = filteredData.reduce((sum, item) => sum + item.dropout, 0);
//   return totalDropout / filteredData.length;
// };

// // Calculate overall average dropout (across all years)
// const getOverallDropout = () => {
//   const totalDropout = allDropoutData.reduce((sum, item) => sum + item.dropout, 0);
//   return totalDropout / allDropoutData.length;
// };

// const DropoutGauge = ({ value }) => {
//   const data = [
//     { name: "Dropout", value },
//     { name: "Remaining", value: 5 - value }, // assuming max 5% dropout
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <PieChart width={300} height={300}>
//         <Pie
//           data={data}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={70}
//           outerRadius={120}
//           dataKey="value"
//           paddingAngle={3}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index]} />
//           ))}
//         </Pie>
//       </PieChart>
//       <div className="text-white text-lg -mt-4">
//         {value}% Dropout
//       </div>
//     </div>
//   );
// };

// const DropoutTrend = ({ year }) => {
//   // If a year is selected, calculate the average dropout for that year
//   const averageDropout = year ? getAverageDropout(year) : getOverallDropout();

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 w-full"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <h2 className="text-white text-xl mb-4 text-center">
//         {year ? `Dropout Trend for ${year}` : "Overall Dropout Rate"}
//       </h2>
//       <div className="flex justify-center items-center">
//         <DropoutGauge value={averageDropout} />
//       </div>
//     </motion.div>
//   );
// };

// export default DropoutTrend;
