import { useState } from "react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {
  User, BookOpen, Clock, TrendingUp,
} from "lucide-react";

import PerformanceByClass from "../components/Teacher/PerformanceByClass";
import PerformanceByQualification from "../components/Teacher/PerformanceByQualification";
import PerformanceBySubject from "../components/Teacher/PerformanceBySubject";
import PerformanceScore from "../components/Teacher/PerformanceScore";
import AverageTenure from "../components/Teacher/AverageTenure";
import TeacherAbsenteeismRate from "../components/Teacher/TeacherAbsenteeismRate";
import TeacherStudentRatio from "../components/Teacher/TeacherStudentRatio";
import TeacherPerformanceChart from "../components/Teacher/payscale";
import SalaryVsPerformanceDashlet from "../components/Teacher/TeacherSalaryPerformance";
import SalaryRangePerformance from "./SalaryRangePerformance";

const teacherStats = [
  { year: "2023", qualification: "B.Ed", total: 80, avgScore: 82, avgTenure: 4.8, subjects: 10 },
  { year: "2023", qualification: "M.Ed", total: 60, avgScore: 77, avgTenure: 5.5, subjects: 8 },
  { year: "2023", qualification: "Ph.D", total: 40, avgScore: 85, avgTenure: 6.1, subjects: 7 },
  { year: "2022", qualification: "B.Ed", total: 30, avgScore: 73, avgTenure: 4.0, subjects: 6 },
  { year: "2022", qualification: "M.Ed", total: 20, avgScore: 79, avgTenure: 5.0, subjects: 5 },
  { year: "2022", qualification: "Ph.D", total: 15, avgScore: 88, avgTenure: 6.8, subjects: 4 },
];

const TeachersPage = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleQualificationChange = (e) => setSelectedQualification(e.target.value);

  // Filter stats based on selected filters
  const filteredStats = teacherStats.filter((d) => {
    const matchYear = selectedYear ? d.year === selectedYear : true;
    const matchQualification = selectedQualification ? d.qualification === selectedQualification : true;
    return matchYear && matchQualification;
  });

  // Aggregate values
  const totalTeachers = filteredStats.reduce((acc, cur) => acc + cur.total, 0);
  const avgScore = filteredStats.length > 0 ? Math.round(filteredStats.reduce((acc, cur) => acc + cur.avgScore, 0) / filteredStats.length) : 0;
  const avgTenure = filteredStats.length > 0 ? (filteredStats.reduce((acc, cur) => acc + cur.avgTenure, 0) / filteredStats.length).toFixed(1) : 0;
  const totalSubjects = filteredStats.reduce((acc, cur) => acc + cur.subjects, 0);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Teachers' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name='Total Teachers' icon={User} value={totalTeachers} color='#6366F1' />
          <StatCard name='Avg. Performance Score' icon={TrendingUp} value={avgScore} color='#10B981' />
          <StatCard name='Avg. Tenure (yrs)' icon={Clock} value={avgTenure} color='#F59E0B' />
          <StatCard name='Subjects Taught' icon={BookOpen} value={totalSubjects} color='#EF4444' />
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <select
            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg"
            value={selectedQualification}
            onChange={handleQualificationChange}
          >
            <option value="">All Qualifications</option>
            <option value="B.Ed">B.Ed</option>
            <option value="M.Ed">M.Ed</option>
            <option value="Ph.D">Ph.D</option>
          </select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <PerformanceScore year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <PerformanceByQualification year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <PerformanceByClass year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <PerformanceBySubject year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <AverageTenure year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <TeacherAbsenteeismRate year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <TeacherStudentRatio year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <TeacherPerformanceChart year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <SalaryVsPerformanceDashlet year={selectedYear} qualification={selectedQualification} />
  </div>
  <div className="bg-gray-800 rounded-xl p-4 shadow-md">
    <SalaryRangePerformance />
  </div>
</div>
    
      </main>
    </div>
  );
};

export default TeachersPage;
