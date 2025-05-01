import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const getColorForPercentage = (percentage) => {
  if (percentage >= 90) return "bg-green-800";
  if (percentage >= 75) return "bg-green-600";
  if (percentage >= 60) return "bg-green-300";
  if (percentage >= 45) return "bg-yellow-400";
  return "bg-red-500";
};

const FinalExamHeatmap = ({ finalExamScores }) => {
  const classes = ["Grade 5", "Grade 6", "Grade 7", "Grade 8"];
  const [viewType, setViewType] = useState("Select");

  if (!finalExamScores || Object.keys(finalExamScores).length === 0) {
    return (
      <div className="bg-gradient-to-r from-green-800 to-blue-900 rounded-lg shadow-md p-6 space-y-6">
        <h3 className="text-lg font-semibold mb-2">Subject-wise Final Exam Performance</h3>
        <p className="text-gray-400">No final exam data available for this student.</p>
      </div>
    );
  }

  const lineChartOptions = {
    chart: {
      type: "line",
      backgroundColor: "#1f2937",
    },
    title: { text: "", style: { color: "#fff" } },
    xAxis: {
      categories: classes,
      labels: { style: { color: "#ccc" } },
    },
    yAxis: {
      title: { text: "Percentage", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      max: 100,
    },
    tooltip: {
      valueSuffix: "%",
      shared: true,
      backgroundColor: "#111",
      style: { color: "#fff" },
    },
    legend: {
      itemStyle: { color: "#fff" },
    },
    series: Object.keys(finalExamScores).map((subject) => ({
      name: subject,
      data: classes.map((cls) => finalExamScores[subject][cls] ?? null),
    })),
    credits: { enabled: false },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <div className="flex items-center justify-between mb-4 relative">
        <h3 className="text-lg font-semibold text-white w-full text-center absolute left-0 right-0 pointer-events-none">
          Subject-wise Final Exam Performance
        </h3>
        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
          className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 ml-auto relative z-10"
        >
          <option value="Select">HeatMap</option>
          <option value="Line Chart">Line Chart</option>
        </select>
      </div>
  
      {viewType === "Line Chart" ? (
        <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-white text-center border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="py-2">Subject</th>
                {classes.map((cls) => (
                  <th key={cls} className="py-2">{cls}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(finalExamScores).map(([subject, scores]) => (
                <tr key={subject}>
                  <td className="py-2 font-medium">{subject}</td>
                  {classes.map((cls) => (
                    <td
                      key={cls}
                      className={`py-2 ${getColorForPercentage(scores[cls] || 0)} rounded`}
                    >
                      {scores[cls] != null ? `${scores[cls]}%` : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
  
};

export default FinalExamHeatmap;
