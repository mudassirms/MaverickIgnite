import { BadgeCheck, Trophy, Clock } from "lucide-react";

const AwardsAndImprovements = ({ awards = [], improvementActions = [] }) => {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-cyan-600 p-4 rounded-lg shadow-md text-white space-y-6">
      {/* Awards Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Trophy size={20} /> Awards & Achievements
        </h3>
        {awards.length > 0 ? (
          <ul className="space-y-2">
            {awards.map((award, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-slate-800 to-cyan-600 p-3 rounded-md border-l-4 border-green-600"
              >
                <p className="font-bold">{award.title}</p>
                <p className="text-sm text-gray-300">
                  {award.type} | {award.level} | {award.year}
                </p>
                <p className="text-sm">{award.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 italic">No awards yet.</p>
        )}
      </div>

      {/* Improvement Actions */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <BadgeCheck size={20} /> Improvement Actions
        </h3>
        {improvementActions.length > 0 ? (
          <ul className="space-y-2">
            {improvementActions.map((item, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-slate-800 to-cyan-600 p-3 rounded-md border-l-4 border-red-600"
              >
                <p className="font-medium">{item.action}</p>
                <p className="text-sm text-gray-300 flex items-center gap-1">
                  <Clock size={14} /> Deadline: {item.deadline}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 italic">No improvement goals set.</p>
        )}
      </div>
    </div>
  );
};

export default AwardsAndImprovements;
