// import { useState } from "react";
// import Select from "react-select";

// // Dummy Student List
// const students = [
//   { value: "1", label: "John Doe (ID: 1)" },
//   { value: "2", label: "Jane Smith (ID: 2)" },
//   { value: "3", label: "Michael Johnson (ID: 3)" },
//   { value: "4", label: "Emily Brown (ID: 4)" },
// ];

// const IndividualStudentPerformance = () => {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   return (
//     <div className="bg-gray-900 rounded-lg p-6 mb-8">
//       <h2 className="text-2xl font-bold text-white mb-4">Individual Student Performance</h2>

//       {/* Student Selector */}
//       <div className="mb-6">
//         <Select
//           options={students}
//           value={selectedStudent}
//           onChange={(selected) => setSelectedStudent(selected)}
//           placeholder="Search Student by Name or ID..."
//           className="text-black"
//         />
//       </div>

//       {/* Conditional Rendering */}
//       {selectedStudent ? (
//         <div className="text-white">
//           {/* Here we will show student profile and all graphs later */}
//           <p className="text-lg">Showing performance details for <span className="font-semibold">{selectedStudent.label}</span></p>
//         </div>
//       ) : (
//         <p className="text-gray-400">Please select a student to view performance details.</p>
//       )}
//     </div>
//   );
// };

// export default IndividualStudentPerformance;
