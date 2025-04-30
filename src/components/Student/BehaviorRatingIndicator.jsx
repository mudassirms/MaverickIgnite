const BehaviorRatingIndicator = ({ ratingsData, studentName }) => {
  // Calculate overall average rating
  const allRatings = ratingsData.flatMap(entry => entry.ratings.map(r => r.rating));
  const overallAvg = allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length) : 0;
  const roundedAvg = Math.round(overallAvg);

  return (
    <div className="bg-gray-700 p-4 rounded-lg text-white w-full max-w-xs">
      <h4 className="text-lg font-semibold mb-2">
        Behavior Ratings - {studentName}
      </h4>

      {/* Overall Rating */}
      <div className="mb-4">
        <h5 className="font-medium">Overall Rating</h5>
        <div className="text-xl text-yellow-400">
          {"⭐".repeat(roundedAvg)} <span className="text-white text-sm ml-2">({overallAvg.toFixed(1)} / 5)</span>
        </div>
      </div>

      {/* Subject-wise Ratings by Class */}
      {ratingsData.map((entry, index) => (
        <div key={index} className="mb-3">
          <h5 className="font-medium mb-1">Class {entry.class}</h5>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-2">
            {entry.ratings.map((r, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{r.subject}</span>
                <span className="text-yellow-400">{"⭐".repeat(r.rating)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BehaviorRatingIndicator;
