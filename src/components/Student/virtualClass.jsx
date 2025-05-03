import { useState } from "react";
import classNames from "classnames";

const getColorClass = (score) => {
  if (score <= 35) return "bg-red-400";
  if (score <= 50) return "bg-orange-400";
  if (score <= 60) return "bg-yellow-400";
  if (score <= 70) return "bg-green-300";
  if (score <= 85) return "bg-teal-400";
  return "bg-teal-600";
};

const VirtualClassGridHeatmap = ({ studentsData }) => {
  const [hovered, setHovered] = useState(null);

 
  const gridData = [...studentsData].sort((a, b) => a.score - b.score);
  while (gridData.length < 30) {
    gridData.push({ name: "N/A", score: null }); 
  }

  return (
    <div className="relative w-full">
      {/* Grid overlay */}
      <div className="grid grid-cols-6 gap-2">
        {gridData.slice(0, 30).map((student, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={classNames(
              "rounded-md shadow-md transition-all duration-300 w-full aspect-[1/1]",
              student.score !== null ? getColorClass(student.score) : "bg-gray-700"
            )}
          >
            {hovered === index && student.score !== null && (
              <div className="absolute bg-white text-black text-sm p-2 rounded-md shadow-lg -translate-y-full z-10">
                <strong>{student.name}</strong>
                <br />
                Score: {student.score}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Below Color Legends */}
      <div className="mt-4 flex flex-wrap justify-between text-sm text-white gap-2">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-400 rounded mr-2"></div>
          <span>0-35</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-orange-400 rounded mr-2"></div>
          <span>36-50</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-yellow-400 rounded mr-2"></div>
          <span>51-60</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-300 rounded mr-2"></div>
          <span>61-70</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-teal-400 rounded mr-2"></div>
          <span>71-85</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-teal-600 rounded mr-2"></div>
          <span>85+</span>
        </div>
      </div>
    </div>
  );
};

export default VirtualClassGridHeatmap;
