// import { ActivitySquare, Users, GraduationCap, UsersRound } from "lucide-react";
// import { motion } from "framer-motion";

// import Header from "../components/common/Header";
// import StatCard from "../components/common/StatCard";
// import AttendanceOverview from "../components/overview/AttendanceOverview";
// import SchoolComposition from "../components/overview/SchoolComposition";
// import StudentGrade from "../components/overview/StudentGrade";

// const schoolStats = {
//   totalStudents: "1,250",
//   totalTeachers: "78",
//   attendanceRate: "92%",
//   engagementScore: "85%",
// };

// const OverviewPage = () => {
//   return (
//     <div className='flex-1 overflow-auto relative z-10'>
//       <Header title='Overview' />

//       <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
//         {/* STATS */}
//         <motion.div
//           className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <StatCard name='Total Students' icon={GraduationCap} value={schoolStats.totalStudents} color='#6366F1' />
//           <StatCard name='Total Teachers' icon={Users} value={schoolStats.totalTeachers} color='#8B5CF6' />
//           <StatCard name='Attendance Rate' icon={UsersRound} value={schoolStats.attendanceRate} color='#EC4899' />
//           <StatCard name='Engagement Score' icon={ActivitySquare} value={schoolStats.engagementScore} color='#10B981' />
//         </motion.div>

//         {/* CHARTS LAYOUT */}
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
//           <div className='space-y-4'>
//             <AttendanceOverview />
//             <StudentGrade />
//           </div>
//           <SchoolComposition />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OverviewPage;
