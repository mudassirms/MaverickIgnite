import { motion } from "framer-motion";

const AttendanceIndicator = ({ attendancePercentage }) => {
  const strokeWidth = 10;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (attendancePercentage / 100) * circumference;

  return (
    <motion.div
      className="relative w-32 h-32 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <svg width={130} height={130} viewBox="0 0 100 100" className="-rotate-90">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#10B981"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />
      </svg>

      {/* Centered Text */}
      <div className="absolute text-white text-xl font-bold">
        {attendancePercentage}%
      </div>
    </motion.div>
  );
};

export default AttendanceIndicator;
