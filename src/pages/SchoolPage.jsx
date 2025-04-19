import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {
  BarChart2,
  Users,
  Building2,
  DollarSign,
  ArrowDownCircle, // Icon for Dropout Rate
} from "lucide-react";

import TotalEnrollment from "../components/School/TotalEnrollment";
import StudentTeacherRatio from "../components/School/StudentTeacherRatio";
import SchoolAveragePerformance from "../components/School/SchoolAveragePerformance";
// import DropoutTrend from "../components/School/DropoutTrend";
import InfrastructureScore from "../components/School/InfrastructureScore";
import TeacherVacancyRate from "../components/School/TeacherVacancyRate";
import FeeCollectionEfficiency from "../components/School/FeeCollectionEfficiency";
// import ScholarshipDistribution from "../components/School/ScholarshipDistribution";


const totalStats = {
  totalEnrollment: "4,512",
  avgPerformance: "74%",
  infrastructureScore: "81",
  feeEfficiency: "89%",
  dropoutRate: "6.2%", 
};

const filteredStats = {
  totalEnrollment: "1,234",
  avgPerformance: "77%",
  infrastructureScore: "85",
  feeEfficiency: "91%",
  dropoutRate: "4.8%",  
};

const SchoolsPage = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const stats = selectedYear ? filteredStats : totalStats;

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="School Dashboard" />

      {/* Filter: Year Only */}
      <div className="max-w-7xl mx-auto px-4 py-4 lg:px-8 flex flex-wrap gap-4">
        <select
          value={selectedYear || ""}
          onChange={handleYearChange}
          className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stat Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Enrollment"
            icon={Users}
            value={stats.totalEnrollment}
            color="#3B82F6"
          />
          <StatCard
            name="Avg. Performance"
            icon={BarChart2}
            value={stats.avgPerformance}
            color="#10B981"
          />
          <StatCard
            name="Infrastructure Score"
            icon={Building2}
            value={stats.infrastructureScore}
            color="#8B5CF6"
          />
          <StatCard
            name="Fee Efficiency"
            icon={DollarSign}
            value={stats.feeEfficiency}
            color="#06B6D4"
          />
          <StatCard
            name="Dropout Rate"
            icon={ArrowDownCircle}
            value={stats.dropoutRate}
            color="#EF4444"
          />
        </motion.div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TotalEnrollment year={selectedYear} />
          {/* <DropoutTrend year={selectedYear} /> */}

          <StudentTeacherRatio year={selectedYear} />
          <SchoolAveragePerformance year={selectedYear} />
          <InfrastructureScore year={selectedYear} />
          <TeacherVacancyRate year={selectedYear} />
          <FeeCollectionEfficiency year={selectedYear} />
          {/* <ScholarshipDistribution year={selectedYear} /> */}
        </div>
      </main>
    </div>
  );
};

export default SchoolsPage;
