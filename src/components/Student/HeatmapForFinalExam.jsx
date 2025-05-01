const getColorForPercentage = (percentage) => {
  if (percentage >= 90) return "bg-green-800";     // Dark Green
  if (percentage >= 75) return "bg-green-600";     // Green
  if (percentage >= 60) return "bg-green-300";     // Light Green
  if (percentage >= 45) return "bg-yellow-400";    // Yellow
  return "bg-red-500";                             // Red
};

const FinalExamHeatmap = ({ finalExamScores }) => {
  const classes = ["Grade 5", "Grade 6", "Grade 7", "Grade 8"];

  if (!finalExamScores || Object.keys(finalExamScores).length === 0) {
    return (
<div className="bg-gradient-to-r from-green-800 to-blue-900 rounded-lg shadow-md p-6 space-y-6">
        <h3 className="text-lg font-semibold mb-2">Final Exam Performance (Heatmap)</h3>
        <p className="text-gray-400">No final exam data available for this student.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <h3 className="text-lg font-semibold text-white text-center mb-4">Final Exam Performance</h3>
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
    </div>
  );
};

export default FinalExamHeatmap;
