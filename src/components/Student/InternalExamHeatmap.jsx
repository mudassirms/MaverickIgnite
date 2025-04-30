

const getColorForPercentage = (percentage) => {
  if (percentage >= 90) return "bg-green-800";     // Dark Green
  if (percentage >= 75) return "bg-green-600";     // Green
  if (percentage >= 60) return "bg-green-300";     // Light Green
  if (percentage >= 45) return "bg-yellow-400";    // Yellow
  return "bg-red-500";                             // Red
};

const InternalExamHeatmap = ({ internalExamScores }) => {
  const allClasses = [
    "Class 5 - Pre Mid Term",
    "Class 5 - Mid Term",
    "Class 5 - Post Mid Term",
    "Class 6 - Pre Mid Term",
    "Class 6 - Mid Term",
    "Class 6 - Post Mid Term",
    "Class 7 - Pre Mid Term",
    "Class 7 - Mid Term",
    "Class 7 - Post Mid Term",
    "Class 8 - Pre Mid Term",
    "Class 8 - Mid Term",
    "Class 8 - Post Mid Term",

  ];

  const subjects = Object.keys(internalExamScores || {});

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md w-full">
      <h3 className="text-lg font-semibold text-white mb-4">
        Internal Exam Performance (Heatmap)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-white text-center border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-700 rounded">Subject</th>
              {allClasses.map((exam) => (
                <th key={exam} className="py-2 px-4 bg-gray-700 rounded">
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
