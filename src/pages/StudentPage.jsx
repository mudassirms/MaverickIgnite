import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BarChart2,
  Users,
  TrendingUp,
} from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import AverageMarksByClass from "../components/Student/AverageMarksByClass";
import SubjectWisePerformance from "../components/Student/SubjectWisePerformance";
import PerformanceByParentEducation from "../components/Student/PerformanceByParentEducation";
import PerformanceByReligionCast from "../components/Student/PerformanceByReligion";
import PerformanceByMotherTongue from "../components/Student/PerformanceByMotherToungue";
import GenderWisePerformance from "../components/Student/GenderWisePerformance";
import TopPerformingStudents from "../components/Student/TopPerformingStudent";
import StudentAttendanceVsMarks from "../components/Student/StudentAttendanceVsMarks";
import PassFailRatio from "../components/Student/PassFailRatio";
import ExtracurricularActivities from "../components/Student/Extraactivties";
import StudentPerformanceDashboard from "../components/Student/StudentProfileDashboard";
import VirtualClassGridHeatmap from "../components/Student/virtualClass";

const students = [
  { name: "Leah Howard", score: 30 },
  { name: "Mark Dean", score: 42 },
  { name: "Ivy Stone", score: 38 },
  { name: "Leah Howard", score: 53 },
  { name: "Mark Dean", score: 89 },
  { name: "Ivy Stone", score: 98 },
  { name: "Leah Howard", score: 74 },
  { name: "Mark Dean", score: 76 },
  { name: "Ivy Stone", score: 88 },
  { name: "Leah Howard", score: 69 },
  { name: "Mark Dean", score: 65 },
  { name: "Ivy Stone", score: 64 },
  { name: "Leah Howard", score: 60 },
  { name: "Mark Dean", score: 49 },
  { name: "Ivy Stone", score: 53 },
  { name: "Leah Howard", score: 77 },
  { name: "Mark Dean", score: 80 },
  { name: "Ivy Stone", score: 80 },
  { name: "Leah Howard", score: 82 },
  { name: "Mark Dean", score: 90 },
  { name: "Ivy Stone", score: 93 },
  { name: "Leah Howard", score: 96 },
  { name: "Mark Dean", score: 94 },
  { name: "Ivy Stone", score: 38 },
  { name: "Leah Howard", score: 40 },
  { name: "Mark Dean", score: 52 },
  { name: "Ivy Stone", score: 74 },
  { name: "Leah Howard", score: 47 },
  { name: "Mark Dean", score: 72 },
  { name: "Ivy Stone", score: 29 },

 
];

const totalStats = {
  totalStudents: "1,250",
  avgPerformance: "87%",
  dropoutRate: "6.2%",
  topPerformers: "125",
};

const filteredStats = {
  totalStudents: "200",
  avgPerformance: "87%",
  dropoutRate: "3.2%",
  topPerformers: "50",
};

const StudentPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);

  const studentStats = selectedYear && selectedGrade ? filteredStats : totalStats;

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Student Dashboard' />

      {/* Filters */}
      <div className='max-w-7xl mx-auto px-4 py-4 lg:px-8 flex flex-wrap gap-4'>
        <select
          value={selectedYear || ""}
          onChange={(e) => setSelectedYear(e.target.value || null)}
          className='px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600'
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <select
          value={selectedGrade || ""}
          onChange={(e) => setSelectedGrade(e.target.value || null)}
          className='px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600'
        >
          <option value="">All Grades</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 6">Grade 6</option>
        </select>
      </div>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name='Total Students' icon={Users} value={studentStats.totalStudents} color='#6366F1' />
          <StatCard name='Avg Students Performance' icon={BarChart2} value={studentStats.avgPerformance} color='#10B981' />
          <StatCard name='Dropout Rate' icon={TrendingUp} value={studentStats.dropoutRate} color='#F59E0B' />
          <StatCard name='Top Performers' icon={GraduationCap} value={studentStats.topPerformers} color='#EF4444' />
        </motion.div>

   {/* Virtual Class View Section */}
   <div className="mb-8">
  <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2 flex items-center gap-2">
    <BarChart2 className="w-6 h-6 text-cyan-400" />
    <span>Virtual Class View</span>
  </h2>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto">
    <VirtualClassGridHeatmap studentsData={students} />
  </div>
</div>

 {/* Individual student Section */}
        <div className="mb-8">
  <StudentPerformanceDashboard />
</div>

{/* Overall Dashboard Heading */}
<div className="flex items-center gap-2 text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
  <BarChart2 className="w-6 h-6 text-cyan-400" />
  <h2>Overall Students Performance</h2>
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
  <AverageMarksByClass year={selectedYear} grade={selectedGrade} />
  <SubjectWisePerformance year={selectedYear} grade={selectedGrade} />
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
  <GenderWisePerformance year={selectedYear} grade={selectedGrade} />
  <PerformanceByParentEducation year={selectedYear} grade={selectedGrade} />
  <PerformanceByReligionCast year={selectedYear} grade={selectedGrade} />
  <PerformanceByMotherTongue year={selectedYear} grade={selectedGrade} />
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
  <TopPerformingStudents year={selectedYear} grade={selectedGrade} />
  <StudentAttendanceVsMarks year={selectedYear} grade={selectedGrade} />
  <ExtracurricularActivities year={selectedYear} grade={selectedGrade} />
  <PassFailRatio year={selectedYear} grade={selectedGrade} />
</div>
      </main>
    </div>
  );
};

export default StudentPage;
