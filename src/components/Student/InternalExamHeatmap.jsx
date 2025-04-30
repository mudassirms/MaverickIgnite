const getColorForPercentage = (percentage) => {
  if (percentage >= 90) return "bg-green-900";     // Dark Green
  if (percentage >= 75) return "bg-green-700";     // Green
  if (percentage >= 60) return "bg-green-400";     // Light Green
  if (percentage >= 45) return "bg-yellow-500";    // Yellow
  return "bg-red-600";                             // Red
};

const InternalExamHeatmap = ({ internalExamScores }) => {
  const allClasses = [
    "Grade 5 - Pre Mid Term",
    "Grade 5 - Mid Term",
    "Grade 5 - Post Mid Term",
    "Grade 6 - Pre Mid Term",
    "Grade 6 - Mid Term",
    "Grade 6 - Post Mid Term",
    "Grade 7 - Pre Mid Term",
    "Grade 7 - Mid Term",
    "Grade 7 - Post Mid Term",
    "Grade 8 - Pre Mid Term",
    "Grade 8 - Mid Term",
    "Grade 8 - Post Mid Term",
  ];

  const subjects = Object.keys(internalExamScores || {});

  return (
    <div className="bg-gradient-to-r from-slate-700 to-cyan-600 rounded-lg shadow-md p-6 space-y-6">
      <h3 className="text-lg font-semibold text-center text-white mb-4">
        Internal Exam Performance
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-white text-center border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gradient-to-r from-slate-800 to-cyan-600 text-white rounded">
                Subject
              </th>
              {allClasses.map((exam) => (
                <th
                  key={exam}
                  className="py-2 px-4 bg-gradient-to-r from-slate-800 to-cyan-600 text-white rounded font-normal"
                >
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
                    <td
                      key={exam}
                      className={`py-2 px-2 rounded ${bgColor} text-white`}
                    >
                      {score !== undefined ? `${score}%` : "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternalExamHeatmap;
