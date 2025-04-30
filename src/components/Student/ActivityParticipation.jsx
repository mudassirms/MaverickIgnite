import { motion } from "framer-motion";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActivityParticipationChart = ({ data, studentName }) => {
  const { availableActivities, participationHistory } = data;

  // Use class directly for grades
  const grades = participationHistory.map((entry) => `Grade ${entry.class}`);
  const counts = participationHistory.map((entry) => entry.participated.length);

  const currentEntry = participationHistory[participationHistory.length - 1];
  const currentGrade = `Grade ${currentEntry.class}`;
  const currentActivities = currentEntry.participated || [];

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Activity Participation by Grade",
      style: { color: "#E5E7EB" },
    },
    xAxis: {
      categories: grades,
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Activities",
        style: { color: "#D1D5DB" },
      },
      labels: { style: { color: "#D1D5DB" } },
      gridLineColor: "#374151",
    },
    legend: {
      itemStyle: { color: "#ccc" },
    },
    tooltip: {
      backgroundColor: "#333",
      style: { color: "#fff" },
      formatter: function () {
        const activities = participationHistory[this.point.index]?.participated || [];
        const activityList = activities.length ? activities.join(", ") : "No participation";
    
        return `<b>Activities Participated: ${this.y}</b><br/>
                <span style="color:#38bdf8">[${activityList}]</span>`;
      },
    },
    series: [
      {
        name: "Activities Participated",
        data: counts,
        color: "#38bdf8",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />

      <div className="mt-4 text-sm space-y-2 text-white">
        <p>Total Available Activities: <span className="font-semibold">{availableActivities.length}</span></p>
        <p>
          {studentName} participated in <span className="font-semibold">{currentActivities.length}</span> activities in <span className="font-semibold">{currentGrade}</span>:{" "}
          {currentActivities.join(", ")}
        </p>

        <div className="mt-3 space-y-1">
          <h4 className="font-semibold underline">Participation History:</h4>
          {participationHistory.map((entry) => (
            <div key={entry.class}>
              <p>
                <strong>Grade {entry.class}:</strong>{" "}
                {entry.participated.length > 0 ? entry.participated.join(", ") : "No participation"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityParticipationChart;
