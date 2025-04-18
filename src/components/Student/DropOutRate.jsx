// //import { motion } from "framer-motion";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // Sample Data (Add year & grade for filtering)
// const dropoutRateData = [
//   { month: "Jul", rate: 2.5, year: "2023", grade: "Grade 10" },
//   { month: "Aug", rate: 2.8, year: "2023", grade: "Grade 10" },
//   { month: "Sep", rate: 3.1, year: "2023", grade: "Grade 10" },
//   { month: "Oct", rate: 3.4, year: "2023", grade: "Grade 10" },
//   { month: "Nov", rate: 3.6, year: "2023", grade: "Grade 10" },
//   { month: "Dec", rate: 3.3, year: "2023", grade: "Grade 10" },
//   { month: "Jan", rate: 3.0, year: "2023", grade: "Grade 10" },
//   { month: "Feb", rate: 2.7, year: "2023", grade: "Grade 10" },
//   { month: "Mar", rate: 2.5, year: "2023", grade: "Grade 10" },
//   { month: "Apr", rate: 2.3, year: "2023", grade: "Grade 10" },
//   { month: "May", rate: 2.1, year: "2023", grade: "Grade 10" },
//   { month: "Jun", rate: 2.0, year: "2023", grade: "Grade 10" },

//   { month: "Apr", rate: 2.3, year: "2022", grade: "Grade 10" },
//   { month: "May", rate: 3.1, year: "2022", grade: "Grade 10" },
//   { month: "Jun", rate: 5.0, year: "2022", grade: "Grade 10" },

//   { month: "Jul", rate: 3.0, year: "2022", grade: "Grade 9" },
//   { month: "Aug", rate: 2.9, year: "2022", grade: "Grade 9" },
// ];

// const DropOutRate = ({ year, grade }) => {
//   const filteredData =
//     year && grade
//       ? dropoutRateData.filter((d) => d.year === year && d.grade === grade)
//       : dropoutRateData;

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <h2 className="text-xl font-semibold text-gray-100 mb-4">
//         Dropout Rate Trend
//       </h2>

//       {filteredData.length === 0 ? (
//         <p className="text-red-400 text-sm">
//           No data for {grade}, {year}.
//         </p>
//       ) : (
//         <div className="w-full h-80">
//           <ResponsiveContainer>
//             <LineChart data={filteredData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//               <XAxis
//                 dataKey="month"
//                 stroke="#D1D5DB"
//                 tick={{ fill: "#D1D5DB", fontSize: 12 }}
//               />
//               <YAxis
//                 domain={[0, 6]}
//                 stroke="#D1D5DB"
//                 tick={{ fill: "#D1D5DB", fontSize: 12 }}
//                 unit="%"
//                 label={{
//                   value: "Dropout %",
//                   angle: -90,
//                   position: "insideLeft",
//                   style: { fill: "#D1D5DB" },
//                 }}
//               />
//               <Tooltip
//                 formatter={(value) => `${value}%`}
//                 contentStyle={{
//                   backgroundColor: "rgba(31, 41, 55, 0.85)",
//                   borderColor: "#4B5563",
//                 }}
//                 itemStyle={{ color: "#E5E7EB" }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="rate"
//                 stroke="#F97316"
//                 strokeWidth={2.5}
//                 dot={{
//                   r: 5,
//                   fill: "#1F2937",
//                   stroke: "#F97316",
//                   strokeWidth: 2,
//                 }}
//                 activeDot={{ r: 7 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default DropOutRate;

