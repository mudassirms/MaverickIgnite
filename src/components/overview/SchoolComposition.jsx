// import { motion } from 'framer-motion';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const overviewData = [
//   { name: 'Students', value: 75 },
//   { name: 'Teachers', value: 75 },
//   { name: 'Admins', value: 25 },
// ];

// const performanceData = [
//   { subject: 'Math', score: 80 },
//   { subject: 'Science', score: 76 },
//   { subject: 'English', score: 82 },
//   { subject: 'History', score: 70 },
//   { subject: 'Geography', score: 75 },
// ];

// // Pie Chart Configuration
// const pieChartOptions = {
//   chart: {
//     type: 'pie',
//     backgroundColor: '#1F2937',
//     style: {
//       fontFamily: 'sans-serif',
//     },
//     height: 350,
//   },
//   title: {
//     text: 'School Composition',
//     style: {
//       color: '#F9FAFB',
//     },
//   },
//   tooltip: {
//     backgroundColor: 'rgba(31, 41, 55, 0.8)',
//     borderColor: '#4B5563',
//     style: {
//       color: '#E5E7EB',
//     },
//     pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
//   },
//   series: [
//     {
//       name: 'Composition',
//       colorByPoint: true,
//       data: overviewData.map((item) => ({
//         name: item.name,
//         y: item.value,
//         color:
//           item.name === 'Students'
//             ? '#6366F1'
//             : item.name === 'Teachers'
//             ? '#10B981'
//             : '#F59E0B',
//       })),
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
// };

// // Bar Chart Configuration
// const barChartOptions = {
//   chart: {
//     type: 'bar',
//     backgroundColor: '#1F2937',
//     style: {
//       fontFamily: 'sans-serif',
//     },
//     height: 350,
//   },
//   title: {
//     text: 'Average Performance by Subject',
//     style: {
//       color: '#F9FAFB',
//     },
//   },
//   xAxis: {
//     categories: performanceData.map((item) => item.subject),
//     labels: {
//       style: { color: '#9ca3af' },
//     },
//     lineColor: '#4B5563',
//   },
//   yAxis: {
    
//     labels: {
//       style: { color: '#9ca3af' },
//     },
//     gridLineColor: '#374151',
//     min: 0,
//     max: 100,
//   },
//   tooltip: {
//     backgroundColor: 'rgba(31, 41, 55, 0.8)',
//     borderColor: '#4B5563',
//     style: { color: '#E5E7EB' },
//     pointFormat: 'Score: <b>{point.y}</b>',
//   },
//   series: [
//     {
//       name: 'Score',
//       data: performanceData.map((item) => item.score),
//       color: '#6366F1',
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
// };

// const OverviewPieChart = () => {
//   return (
//     <div className='flex flex-col items-center gap-8 p-4'>
//       {/* Pie Chart */}
//       <motion.div
//         className='bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 w-full max-w-md'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
//       </motion.div>

//       {/* Bar Chart */}
//       <motion.div
//         className='bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 w-full max-w-md'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//       >
//         <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
//       </motion.div>
//     </div>
//   );
// };

// export default OverviewPieChart;
