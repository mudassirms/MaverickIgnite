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

const InternalExamHeatmap = ({ internalExamScores }) => {
  const [chartType, setChartType] = useState("Select");
  const [selectedSubject, setSelectedSubject] = useState("");

  const allClasses = [
    "Grade 5 - Pre Mid Term", "Grade 5 - Mid Term", "Grade 5 - Post Mid Term",
    "Grade 6 - Pre Mid Term", "Grade 6 - Mid Term", "Grade 6 - Post Mid Term",
    "Grade 7 - Pre Mid Term", "Grade 7 - Mid Term", "Grade 7 - Post Mid Term",
    "Grade 8 - Pre Mid Term", "Grade 8 - Mid Term", "Grade 8 - Post Mid Term",
  ];

  const grades = ["Grade 5", "Grade 6", "Grade 7", "Grade 8"];
  const examTypes = ["Pre Mid Term", "Mid Term", "Post Mid Term"];
  const subjects = Object.keys(internalExamScores || {});

  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "#1f2937",
    },
    title: {
      text: "", // No dynamic title here since we are using static heading
    },
    xAxis: {
      categories: grades,
      title: { text: "Grade", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Marks (%)",
        style: { color: "#ccc" },
      },
      labels: { style: { color: "#ccc" } },
    },
    legend: {
      itemStyle: { color: "#fff" },
    },
    tooltip: {
      shared: true,
      valueSuffix: "%",
      backgroundColor: "#111",
      style: { color: "#fff" },
    },
    plotOptions: {
      column: {
        grouping: true,
        borderWidth: 0,
      },
    },
    series: examTypes.map((exam) => ({
      name: exam,
      data: grades.map((grade) => {
        const key = `${grade} - ${exam}`;
        return internalExamScores[selectedSubject]?.[key] ?? null;
      }),
    })),
    credits: { enabled: false },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      {/* Static Heading */}
      <h3 className="text-lg font-semibold text-center text-white mb-4">Subject-wise Internal Exam Performance</h3>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          value={chartType}
          onChange={(e) => {
            setChartType(e.target.value);
            setSelectedSubject("");
          }}
          className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1"
        >
          <option value="Select">Select</option>
          <option value="Column">Column Chart</option>
        </select>

        {chartType === "Column" && (
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1"
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        )}
      </div>

      {/* Chart or Heatmap */}
      {chartType === "Column" && selectedSubject ? (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-white text-center border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-700 rounded">Subject</th>
                {allClasses.map((exam) => (
                  <th key={exam} className="py-2 px-4 bg-gray-700 rounded font-normal">
                    {exam}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr key={subject}>
                  <td className="py-2 font-medium">{subject}</td>
                  {allClasses.map((exam) => {
                    const score = internalExamScores[subject]?.[exam];
                    const bgColor = getColorForPercentage(score);
                    return (
                      <td key={exam} className={`py-2 px-2 rounded ${bgColor} text-white`}>
                        {score !== undefined ? `${score}%` : "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InternalExamHeatmap;
