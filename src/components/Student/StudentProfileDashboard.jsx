import { useState } from "react";
import Select from "react-select";
import FinalExamPerformance from "./FinalExamPerformance";
import InternalExamPerformance from "./InternalExamPerformance";
import AttendanceIndicator from "./AttendanceIndicator";
import BehaviorRatingIndicator from "./BehaviorRatingIndicator";
import ActivityParticipation from "./ActivityParticipation";
import FinalExamHeatmap from "./HeatmapForFinalExam";
import AwardsAndImprovements from "./AwardsAndImprovements";
import InternalExamHeatmap from "./InternalExamHeatmap";

const students = [
    {
      value: "1",
      label: "Kadeer (ID: 1)",
      name: "Kadeer",
      class: "9",
      section: "A",
      rollNumber: "1",
      image: "/boy.png",
      awards: [
        { title: "Top Performer in Science", type: "Academic", year: "2024", level: "School", description: "Awarded for achieving highest marks in Science." },
        { title: "Best Sportsmanship", type: "Sports", year: "2023", level: "District", description: "Awarded for demonstrating great sportsmanship in Football." }
      ],
      improvementActions: [
        { action: "Improve Math skills by practicing problems daily", deadline: "2024-05-01" },
        { action: "Increase participation in group discussions for English", deadline: "2024-06-01" }
      ],

      finalExamScores: {
        Math: { "Class 5": 48, "Class 6": 53, "Class 7": 60, "Class 8": 80 },
        Science: { "Class 5": 62, "Class 6": 68, "Class 7": 70, "Class 8": 80 },
        English: { "Class 5": 85, "Class 6": 80, "Class 7": 88, "Class 8": 95 },
        History: { "Class 5": 47, "Class 6": 52, "Class 7": 73, "Class 8": 80 },
        Geography: { "Class 5": 45, "Class 6": 50, "Class 7": 68, "Class 8": 82 },
        Computer: { "Class 5": 40, "Class 6": 54, "Class 7": 70, "Class 8": 81 }, 


      },

      finalExamPerformance: [
        { class: "5", performance: 75 },
        { class: "6", performance: 80 },
        { class: "7", performance: 85 },
        { class: "8", performance: 90 },
      ],
      internalExamPerformance: [
        { class: "5", scores: [75, 80, 85] },
        { class: "6", scores: [80, 85, 90] },
        { class: "7", scores: [85, 90, 95] },
        {class:  "8", scores:   [65, 56, 89] },
      ],
      attendance: 92,
      behaviorRatings: [
        {
          class: "8",
          ratings: [
            { subject: "Math", rating: 4 },
            { subject: "Science", rating: 5 },
            { subject: "English", rating: 3 },
            { subject: "History", rating: 5 },
            { subject: "Geography", rating: 3 },
            { subject: "Computer", rating: 3 },
          ],
        }
      ],
      activityParticipation: {
        availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
        participationHistory: [
          { year: "2022", participated: ["Sports", "Art"] },
          { year: "2023", participated: ["Music", "Debate", "Drama"] },
          { year: "2024", participated: ["Debate", "Drama", "Sports"] }
        ]
      }, 
      internalExamScores: {
        Math: {
          "Class 5 - Pre Mid Term": 45,
          "Class 5 - Mid Term": 51,
          "Class 5 - Post Mid Term": 60,
          "Class 6 - Pre Mid Term": 60,
          "Class 6 - Mid Term": 75,
          "Class 6 - Post Mid Term": 80,
          "Class 7 - Pre Mid Term": 60,
          "Class 7 - Mid Term": 75,
          "Class 7 - Post Mid Term": 80,
          "Class 8 - Pre Mid Term": 80,
          "Class 8 - Mid Term": 82,
          "Class 8 - Post Mid Term": 85,
        },
        Science: {
          "Class 5 - Pre Mid Term": 50,
          "Class 5 - Mid Term": 60,
          "Class 5 - Post Mid Term": 65,
          "Class 6 - Pre Mid Term": 75,
          "Class 6 - Mid Term": 74,
          "Class 6 - Post Mid Term": 80,
          "Class 7 - Pre Mid Term": 60,
          "Class 7 - Mid Term": 75,
          "Class 7 - Post Mid Term": 80,
          "Class 8 - Pre Mid Term": 86,
          "Class 8 - Mid Term": 88,
          "Class 8 - Post Mid Term": 89,
        },
        English: {
          "Class 5 - Pre Mid Term": 90,
          "Class 5 - Mid Term": 65,
          "Class 5 - Post Mid Term": 70,
          "Class 6 - Pre Mid Term": 85,
          "Class 6 - Mid Term": 88,
          "Class 6 - Post Mid Term": 90,
          "Class 7 - Pre Mid Term": 85,
          "Class 7 - Mid Term": 88,
          "Class 7 - Post Mid Term": 90,
          "Class 8 - Pre Mid Term": 78,
          "Class 8 - Mid Term": 79,
          "Class 8 - Post Mid Term": 80,

        },
        History: {
            "Class 5 - Pre Mid Term": 45,
            "Class 5 - Mid Term": 51,
            "Class 5 - Post Mid Term": 60,
            "Class 6 - Pre Mid Term": 60,
            "Class 6 - Mid Term": 75,
            "Class 6 - Post Mid Term": 80,
            "Class 7 - Pre Mid Term": 60,
            "Class 7 - Mid Term": 75,
            "Class 7 - Post Mid Term": 80,
            "Class 8 - Pre Mid Term": 87,
            "Class 8 - Mid Term": 88,
            "Class 8 - Post Mid Term": 86,
          },
          Geography: {
            "Class 5 - Pre Mid Term": 45,
            "Class 5 - Mid Term": 51,
            "Class 5 - Post Mid Term": 60,
            "Class 6 - Pre Mid Term": 60,
            "Class 6 - Mid Term": 75,
            "Class 6 - Post Mid Term": 80,
            "Class 7 - Pre Mid Term": 60,
            "Class 7 - Mid Term": 75,
            "Class 7 - Post Mid Term": 80,
            "Class 8 - Pre Mid Term": 79,
            "Class 8 - Mid Term": 81,
            "Class 8 - Post Mid Term": 87,
          },
          Computer: {
            "Class 5 - Pre Mid Term": 45,
            "Class 5 - Mid Term": 51,
            "Class 5 - Post Mid Term": 60,
            "Class 6 - Pre Mid Term": 60,
            "Class 6 - Mid Term": 75,
            "Class 6 - Post Mid Term": 80,
            "Class 7 - Pre Mid Term": 60,
            "Class 7 - Mid Term": 75,
            "Class 7 - Post Mid Term": 80,
            "Class 8 - Pre Mid Term": 80,
            "Class 8 - Mid Term": 82,
            "Class 8 - Post Mid Term": 88,
          },
      },
      
         
    },
    {
      value: "2",
      label: "Riza (ID: 2)",
      name: "Riza",
      class: "9",
      section: "B",
      rollNumber: "2",
      image: "/girl.png",
      awards: [
        { title: "Top Performer in Maths", type: "Academic", year: "2023", level: "School", description: "Awarded for achieving highest marks in Maths." },
        { title: "Best Sportsmanship", type: "Sports", year: "2023", level: "District", description: "Awarded for demonstrating great sportsmanship in Football." }
      ],
      improvementActions: [
        { action: "Improve Science skills by practicing Diagrams daily", deadline: "2024-06-01" },
        { action: "Increase participation in group discussions for English", deadline: "2024-06-01" }
      ],

      finalExamScores: {
        Math: { "Class 5": 83, "Class 6": 81, "Class 7": 87, "Class 8": 90 },
        Science: { "Class 5": 77, "Class 6": 74, "Class 7": 80, "Class 8": 84 },
        English: { "Class 5": 90, "Class 6": 88, "Class 7": 91, "Class 8": 93 },
        History: { "Class 5": 68, "Class 6": 71, "Class 7": 75, "Class 8": 79 },
        Geography: { "Class 5": 32, "Class 6": 56, "Class 7": 65, "Class 8": 75 },
        Computer: { "Class 5": 42, "Class 6": 61, "Class 7": 73, "Class 8": 80 },
      },

      finalExamPerformance: [
        { class: "5", performance: 68 },
        { class: "6", performance: 70 },
        { class: "7", performance: 74 },
        { class: "8", performance: 85 },
      ],
      internalExamPerformance: [
        { class: "5", scores: [70, 75, 80] },
        { class: "6", scores: [75, 80, 85] },
        { class: "7", scores: [85, 90, 95] },
        {class:  "8", scores:   [65, 56, 89] },
      ],
      attendance: 85,   // 🟠 <--- Add attendance field
      behaviorRatings: [
        {
          class: "8",
          ratings: [
            { subject: "Math", rating: 4.5 },
            { subject: "Science", rating: 5 },
            { subject: "English", rating: 3 },
            { subject: "History", rating: 5 },
            { subject: "Geography", rating: 3 },
            { subject: "Computer", rating: 3 },
          ],
        }
      ],
      activityParticipation: {
        availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
        participationHistory: [
          { year: "2022", participated: ["Sports", "Art"] },
          { year: "2023", participated: ["Music", "Debate", "Drama"] },
          { year: "2024", participated: ["Debate", "Drama", "Sports"] }
        ]
      },
      internalExamScores: {
        Math: {
          "Class 5 - Pre Mid Term": 73,
          "Class 5 - Mid Term": 70,
          "Class 5 - Post Mid Term": 77,
          "Class 6 - Pre Mid Term": 65,
          "Class 6 - Mid Term": 60,
          "Class 6 - Post Mid Term": 68,
          "Class 7 - Pre Mid Term": 80,
          "Class 7 - Mid Term": 89,
          "Class 7 - Post Mid Term": 85,
          "Class 8 - Pre Mid Term": 65,
          "Class 8 - Mid Term": 75,
          "Class 8 - Post Mid Term": 85,
        },
        Science: {
          "Class 5 - Pre Mid Term": 78,
          "Class 5 - Mid Term": 87,
          "Class 5 - Post Mid Term": 79,
          "Class 6 - Pre Mid Term": 65,
          "Class 6 - Mid Term": 60,
          "Class 6 - Post Mid Term": 68,
          "Class 7 - Pre Mid Term": 65,
          "Class 7 - Mid Term": 80,
          "Class 7 - Post Mid Term": 89,
          "Class 8 - Pre Mid Term": 98,
          "Class 8 - Mid Term": 89,
          "Class 8 - Post Mid Term": 90,
        },
        English: {
         "Class 5 - Pre Mid Term": 73,
          "Class 5 - Mid Term": 70,
          "Class 5 - Post Mid Term": 77,
          "Class 6 - Pre Mid Term": 80,
          "Class 6 - Mid Term": 60,
          "Class 6 - Post Mid Term": 50,
          "Class 7 - Pre Mid Term": 60,
          "Class 7 - Mid Term": 60,
          "Class 7 - Post Mid Term": 70,
          "Class 8 - Pre Mid Term": 60,
          "Class 8 - Mid Term": 80,
          "Class 8 - Post Mid Term": 90,
        },
        History: {
         "Class 5 - Pre Mid Term": 73,
          "Class 5 - Mid Term": 70,
          "Class 5 - Post Mid Term": 77,
          "Class 6 - Pre Mid Term": 65,
          "Class 6 - Mid Term": 60,
          "Class 6 - Post Mid Term": 68,
          "Class 7 - Pre Mid Term": 65,
          "Class 7 - Mid Term": 60,
          "Class 7 - Post Mid Term": 68,
          "Class 8 - Pre Mid Term": 65,
          "Class 8 - Mid Term": 80,
          "Class 8 - Post Mid Term": 90,
        },
        Geography: {
            "Class 5 - Pre Mid Term": 65,
             "Class 5 - Mid Term": 69,
             "Class 5 - Post Mid Term": 70,
             "Class 6 - Pre Mid Term": 71,
             "Class 6 - Mid Term": 69,
             "Class 6 - Post Mid Term": 74,
             "Class 7 - Pre Mid Term": 70,
             "Class 7 - Mid Term": 74,
             "Class 7 - Post Mid Term": 73,
             "Class 8 - Pre Mid Term": 69,
             "Class 8 - Mid Term": 68,
             "Class 8 - Post Mid Term": 75,
           },
           Computer: {
            "Class 5 - Pre Mid Term": 74,
             "Class 5 - Mid Term": 69,
             "Class 5 - Post Mid Term": 69,
             "Class 6 - Pre Mid Term": 70,
             "Class 6 - Mid Term": 80,
             "Class 6 - Post Mid Term": 69,
             "Class 7 - Pre Mid Term": 73,
             "Class 7 - Mid Term": 79,
             "Class 7 - Post Mid Term": 84,
             "Class 8 - Pre Mid Term": 65,
             "Class 8 - Mid Term": 80,
             "Class 8 - Post Mid Term": 90,
           },
      },
      
      
    },
    {
        value: "3",
        label: "Sunil (ID: 3)",
        name: "Sunil S",
        class: "9",
        section: "B",
        rollNumber: "3",
        image: "/boy.png",
        awards: [
            { title: "Top Performer in Maths", type: "Academic", year: "2023", level: "School", description: "Awarded for achieving highest marks in Maths." },
            { title: "Best Sportsmanship", type: "Sports", year: "2023", level: "District", description: "Awarded for demonstrating great sportsmanship in Football." }
          ],
          improvementActions: [
            { action: "Improve Science skills by practicing Diagrams daily", deadline: "2024-06-01" },
            { action: "Increase participation in group discussions for English", deadline: "2024-06-01" }
          ],

          finalExamScores: {
            Math: { "Class 5": 48, "Class 6": 53, "Class 7": 60, "Class 8": 80 },
            Science: { "Class 5": 35, "Class 6": 59, "Class 7": 75, "Class 8": 79 },
            English: { "Class 5": 40, "Class 6": 57, "Class 7": 65, "Class 8": 81 },
            History: { "Class 5": 47, "Class 6": 52, "Class 7": 73, "Class 8": 80 },
            Geography: { "Class 5": 45, "Class 6": 50, "Class 7": 68, "Class 8": 82 },
            Computer: { "Class 5": 40, "Class 6": 54, "Class 7": 70, "Class 8": 81 }, 
        },

        finalExamPerformance: [
          { class: "5", performance: 65 },
          { class: "6", performance: 78 },
          { class: "7", performance: 80 },
          { class: "8", performance: 98 },
        ],
        internalExamPerformance: [
          { class: "5", scores: [98, 89, 78] },
          { class: "6", scores: [87, 58, 89] },
          { class: "7", scores: [98, 90, 89] },
          {class:  "8", scores:  [65, 56, 89] },
        ],
        attendance: 75,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "8",
              ratings: [
                { subject: "Math", rating: 5 },
                { subject: "Science", rating: 4.5 },
                { subject: "English", rating: 4 },
                { subject: "History", rating: 5 },
                { subject: "Geography", rating: 3 },
                { subject: "Computer", rating: 3 },
              ],
            }
          ],
          activityParticipation: {
            availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
            participationHistory: [
              { year: "2022", participated: ["Sports", "Art"] },
              { year: "2023", participated: ["Music", "Debate", "Drama"] },
              { year: "2024", participated: ["Debate", "Drama", "Sports"] }
            ]
          },
          internalExamScores: {
            Math: {
              "Class 5 - Pre Mid Term": 70,
          "Class 5 - Mid Term": 74,
          "Class 5 - Post Mid Term": 70,
          "Class 6 - Pre Mid Term": 60,
          "Class 6 - Mid Term": 56,
          "Class 6 - Post Mid Term": 68,
          "Class 7 - Pre Mid Term": 69,
          "Class 7 - Mid Term": 70,
          "Class 7 - Post Mid Term": 74,
          "Class 8 - Pre Mid Term": 74,
          "Class 8 - Mid Term": 68,
          "Class 8 - Post Mid Term": 74,
            },
            Science: {
              "Class 5 - Pre Mid Term": 33,
          "Class 5 - Mid Term": 40,
          "Class 5 - Post Mid Term": 56,
          "Class 6 - Pre Mid Term": 60,
          "Class 6 - Mid Term": 62,
          "Class 6 - Post Mid Term": 64,
          "Class 7 - Pre Mid Term": 39,
          "Class 7 - Mid Term": 57,
          "Class 7 - Post Mid Term": 70,
          "Class 8 - Pre Mid Term": 70,
          "Class 8 - Mid Term": 72,
          "Class 8 - Post Mid Term": 80,
            },
            English: {
             "Class 5 - Pre Mid Term": 81,
          "Class 5 - Mid Term": 70,
          "Class 5 - Post Mid Term": 77,
          "Class 6 - Pre Mid Term": 65,
          "Class 6 - Mid Term": 76,
          "Class 6 - Post Mid Term": 80,
          "Class 7 - Pre Mid Term": 75,
          "Class 7 - Mid Term": 74,
          "Class 7 - Post Mid Term": 78,
          "Class 8 - Pre Mid Term": 80,
          "Class 8 - Mid Term": 81,
          "Class 8 - Post Mid Term": 85,
            },
            History: {
             "Class 5 - Pre Mid Term": 73,
          "Class 5 - Mid Term": 80,
          "Class 5 - Post Mid Term": 85,
          "Class 6 - Pre Mid Term": 78,
          "Class 6 - Mid Term": 87,
          "Class 6 - Post Mid Term": 47,
          "Class 7 - Pre Mid Term": 65,
          "Class 7 - Mid Term": 80,
          "Class 7 - Post Mid Term": 68,
          "Class 8 - Pre Mid Term": 65,
          "Class 8 - Mid Term": 80,
          "Class 8 - Post Mid Term": 90,
            },
            Geography: {
                "Class 5 - Pre Mid Term": 80,
                 "Class 5 - Mid Term": 74,
                 "Class 5 - Post Mid Term": 75,
                 "Class 6 - Pre Mid Term": 60,
                 "Class 6 - Mid Term": 63,
                 "Class 6 - Post Mid Term": 69,
                 "Class 7 - Pre Mid Term": 70,
                 "Class 7 - Mid Term": 71,
                 "Class 7 - Post Mid Term": 72,
                 "Class 8 - Pre Mid Term": 76,
                 "Class 8 - Mid Term": 80,
                 "Class 8 - Post Mid Term": 90,
               },
               Computer: {
                "Class 5 - Pre Mid Term": 74,
                 "Class 5 - Mid Term": 80,
                 "Class 5 - Post Mid Term": 82,
                 "Class 6 - Pre Mid Term": 86,
                 "Class 6 - Mid Term": 83,
                 "Class 6 - Post Mid Term": 76,
                 "Class 7 - Pre Mid Term": 75,
                 "Class 7 - Mid Term": 75,
                 "Class 7 - Post Mid Term": 78,
                 "Class 8 - Pre Mid Term": 84,
                 "Class 8 - Mid Term": 86,
                 "Class 8 - Post Mid Term": 92,
               },
          },
          
          
      },
      {
        value: "4",
        label: "Kunaal (ID: 4)",
        name: "Kunaal S",
        class: "9",
        section: "B",
        rollNumber: "4",
        image: "/boy2.jpg",
        awards: [
            { title: "Top Performer in Maths", type: "Academic", year: "2023", level: "School", description: "Awarded for achieving highest marks in Maths." },
            { title: "Best Sportsmanship", type: "Sports", year: "2023", level: "District", description: "Awarded for demonstrating great sportsmanship in Football." }
          ],
          improvementActions: [
            { action: "Improve Science skills by practicing Diagrams daily", deadline: "2024-06-01" },
            { action: "Increase participation in group discussions for English", deadline: "2024-06-01" }
          ],

          finalExamScores: {
            Math: { "Class 5": 48, "Class 6": 53, "Class 7": 60, "Class 8": 80 },
            Science: { "Class 5": 35, "Class 6": 59, "Class 7": 70, "Class 8": 79 },
            English: { "Class 5": 40, "Class 6": 57, "Class 7": 65, "Class 8": 81 },
            History: { "Class 5": 47, "Class 6": 52, "Class 7": 73, "Class 8": 80 },
            Geography: { "Class 5": 45, "Class 6": 50, "Class 7": 68, "Class 8": 82 },
            Computer: { "Class 5": 40, "Class 6": 54, "Class 7": 70, "Class 8": 81 }, 
          },


        finalExamPerformance: [
          { class: "5", performance: 69 },
          { class: "6", performance: 68 },
          { class: "7", performance: 75 },
          { class: "8", performance: 85 },
        ],
        internalExamPerformance: [
          { class: "5", scores: [75, 98, 75] },
          { class: "6", scores: [80, 80, 90] },
          { class: "7", scores: [80, 83, 92] },
          {class:  "8", scores:   [65, 56, 89] },
        ],
        attendance: 80,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "8",
              ratings: [
                { subject: "Math", rating: 5 },
                { subject: "Science", rating: 5 },
                { subject: "English", rating: 3 },
                { subject: "History", rating: 5 },
                { subject: "Geography", rating: 3 },
                { subject: "Computer", rating: 3 },
              ],
            }
          ],
          activityParticipation: {
            availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
            participationHistory: [
              { year: "2022", participated: ["Music", "Art"] },
              { year: "2023", participated: ["Debate", "Drama"] },
              { year: "2024", participated: ["Debate", "Drama", "Sports"] }
            ]
          },

          internalExamScores: {
            Math: {
          "Class 5 - Pre Mid Term": 53,
          "Class 5 - Mid Term": 52,
          "Class 5 - Post Mid Term": 55,
          "Class 6 - Pre Mid Term": 60,
          "Class 6 - Mid Term": 61,
          "Class 6 - Post Mid Term": 65,
          "Class 7 - Pre Mid Term": 69,
          "Class 7 - Mid Term": 68,
          "Class 7 - Post Mid Term": 69,
          "Class 8 - Pre Mid Term": 71,
          "Class 8 - Mid Term": 70,
          "Class 8 - Post Mid Term": 85,
            },
         Science: {
             "Class 5 - Pre Mid Term": 78,
             "Class 5 - Mid Term": 80,
             "Class 5 - Post Mid Term": 78,
             "Class 6 - Pre Mid Term": 87,
             "Class 6 - Mid Term": 65,
             "Class 6 - Post Mid Term": 69,
             "Class 7 - Pre Mid Term": 70,
             "Class 7 - Mid Term": 72,
             "Class 7 - Post Mid Term": 74,
             "Class 8 - Pre Mid Term": 65,
             "Class 8 - Mid Term": 58,
             "Class 8 - Post Mid Term": 62,
            },
         English: {
            "Class 5 - Pre Mid Term": 80,
            "Class 5 - Mid Term": 85,
            "Class 5 - Post Mid Term": 78,
            "Class 6 - Pre Mid Term": 87,
            "Class 6 - Mid Term": 78,
            "Class 6 - Post Mid Term": 80,
            "Class 7 - Pre Mid Term": 82,
            "Class 7 - Mid Term": 78,
            "Class 7 - Post Mid Term": 70,
            "Class 8 - Pre Mid Term": 65,
            "Class 8 - Mid Term": 45,
            "Class 8 - Post Mid Term": 62,
            },
         History: {
            "Class 5 - Pre Mid Term": 53,
            "Class 5 - Mid Term": 52,
            "Class 5 - Post Mid Term": 55,
            "Class 6 - Pre Mid Term": 60,
            "Class 6 - Mid Term": 61,
            "Class 6 - Post Mid Term": 65,
            "Class 7 - Pre Mid Term": 69,
            "Class 7 - Mid Term": 68,
            "Class 7 - Post Mid Term": 69,
            "Class 8 - Pre Mid Term": 71,
            "Class 8 - Mid Term": 70,
            "Class 8 - Post Mid Term": 85,
          },

         Geography: {
            "Class 5 - Pre Mid Term": 53,
            "Class 5 - Mid Term": 52,
            "Class 5 - Post Mid Term": 55,
            "Class 6 - Pre Mid Term": 60,
            "Class 6 - Mid Term": 61,
            "Class 6 - Post Mid Term": 65,
            "Class 7 - Pre Mid Term": 69,
            "Class 7 - Mid Term": 68,
            "Class 7 - Post Mid Term": 69,
            "Class 8 - Pre Mid Term": 71,
            "Class 8 - Mid Term": 70,
            "Class 8 - Post Mid Term": 85,
            },
            Computer: {
                "Class 5 - Pre Mid Term": 53,
                "Class 5 - Mid Term": 52,
                "Class 5 - Post Mid Term": 55,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 61,
                "Class 6 - Post Mid Term": 65,
                "Class 7 - Pre Mid Term": 69,
                "Class 7 - Mid Term": 68,
                "Class 7 - Post Mid Term": 69,
                "Class 8 - Pre Mid Term": 71,
                "Class 8 - Mid Term": 70,
                "Class 8 - Post Mid Term": 85,
                  },
          },
          
     
          
      },
      {
        value: "5",
        label: "Pooja (ID: 5)",
        name: "Pooja E",
        class: "9",
        section: "B",
        rollNumber: "5",
        image: "/girl2.png",
        awards: [
            { title: "Top Performer in Hindi", type: "Academic", year: "2023", level: "School" },
            { title: "Best cricketer", type: "Sports", year: "2023", level: "District", description: "Awarded for demonstrating great sportsmanship in Cricket." }
          ],
          improvementActions: [
            { action: "Improve Science skills by practicing Diagrams daily", deadline: "2024-06-01" },
            { action: "Increase participation in group discussions for English", deadline: "2024-06-01" }
          ],

          finalExamScores: {
            Math: { "Class 5": 83, "Class 6": 81, "Class 7": 87, "Class 8": 90 },
            Science: { "Class 5": 77, "Class 6": 74, "Class 7": 80, "Class 8": 84 },
            English: { "Class 5": 90, "Class 6": 88, "Class 7": 91, "Class 8": 93 },
            History: { "Class 5": 70, "Class 6": 78, "Class 7": 80, "Class 8": 90 },
            Geography: { "Class 5": 75, "Class 6": 70, "Class 7": 73, "Class 8": 79 },
            Computer: { "Class 5": 62, "Class 6": 68, "Class 7": 67, "Class 8": 69 },          },

        finalExamPerformance: [
          { class: "5", performance: 70 },
          { class: "6", performance: 75 },
          { class: "7", performance: 85 },
          { class: "8", performance: 90 },
        ],
        internalExamPerformance: [
          { class: "5", scores: [70, 75, 80] },
          { class: "6", scores: [75, 80, 85] },
          { class: "7", scores: [85, 90, 95] },
          {class:  "8", scores:   [65, 56, 89] },
        ],
        attendance: 90,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "8",
              ratings: [
                { subject: "Math", rating: 3 },
                { subject: "Science", rating: 4 },
                { subject: "English", rating: 3 },
                { subject: "History", rating: 5 },
                { subject: "Geography", rating: 3 },
                { subject: "Computer", rating: 3 },
              ],
            }
          ],
          activityParticipation: {
            availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
            participationHistory: [
              { year: "2022", participated: ["Sports", "Art"] },
              { year: "2023", participated: ["Music", "Debate", "Drama"] },
              { year: "2024", participated: ["Drama", "Sports"] }
            ]
          },

          internalExamScores: {
            Math: {
                "Class 5 - Pre Mid Term": 84,
                "Class 5 - Mid Term": 82,
                "Class 5 - Post Mid Term": 80,
                "Class 6 - Pre Mid Term": 87,
                "Class 6 - Mid Term": 88,
                "Class 6 - Post Mid Term": 85,
                "Class 7 - Pre Mid Term": 86,
                "Class 7 - Mid Term": 80,
                "Class 7 - Post Mid Term": 84,
                "Class 8 - Pre Mid Term": 96,
                "Class 8 - Mid Term": 90,
                "Class 8 - Post Mid Term": 98,
            },
            Science: {
                "Class 5 - Pre Mid Term": 45,
          "Class 5 - Mid Term": 51,
          "Class 5 - Post Mid Term": 60,
          "Class 6 - Pre Mid Term": 60,
          "Class 6 - Mid Term": 75,
          "Class 6 - Post Mid Term": 80,
          "Class 7 - Pre Mid Term": 60,
          "Class 7 - Mid Term": 75,
          "Class 7 - Post Mid Term": 80,
          "Class 8 - Pre Mid Term": 80,
          "Class 8 - Mid Term": 82,
          "Class 8 - Post Mid Term": 85,
            },
            English: {
                "Class 5 - Pre Mid Term": 80,
                "Class 5 - Mid Term": 85,
                "Class 5 - Post Mid Term": 78,
                "Class 6 - Pre Mid Term": 87,
                "Class 6 - Mid Term": 78,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 82,
                "Class 7 - Mid Term": 78,
                "Class 7 - Post Mid Term": 70,
                "Class 8 - Pre Mid Term": 65,
                "Class 8 - Mid Term": 45,
                "Class 8 - Post Mid Term": 62,
            },
            History: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 87,
                "Class 8 - Mid Term": 88,
                "Class 8 - Post Mid Term": 86,
              },
              Geography: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 79,
                "Class 8 - Mid Term": 81,
                "Class 8 - Post Mid Term": 87,
              },
              Computer: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 80,
                "Class 8 - Mid Term": 82,
                "Class 8 - Post Mid Term": 88,
              },
          },
      },
      {
        value: "6",
        label: "Sayeem (ID: 6)",
        name: "Sayeem N",
        class: "9",
        section: "B",
        rollNumber: "6",
        image: "/boy3.png",
        awards: [
            { title: "Top Performer in English", type: "Academic", year: "2023", level: "School" },
            { title: "Best Sportsmanship", type: "Sports", year: "2024", level: "State", description: "Awarded for demonstrating great sportsmanship in Football." }
          ],
          improvementActions: [
            { action: "Improve Science skills by practicing Diagrams daily", deadline: "2024-05-01" },
            { action: "Increase participation in group discussions for English", deadline: "2024-05-01" }
          ],

          finalExamScores: {
            Math: { "Class 5": 70, "Class 6": 70, "Class 7": 80, "Class 8": 85 },
            Science: { "Class 5": 77, "Class 6": 74, "Class 7": 80, "Class 8": 84 },
            English: { "Class 5": 90, "Class 6": 88, "Class 7": 91, "Class 8": 93 },
            History: { "Class 5": 70, "Class 6": 78, "Class 7": 80, "Class 8": 90 },
            Geography: { "Class 5": 75, "Class 6": 70, "Class 7": 73, "Class 8": 79 },
            Computer: { "Class 5": 62, "Class 6": 68, "Class 7": 67, "Class 8": 69 },          },

        finalExamPerformance: [
          { class: "5", performance: 80 },
          { class: "6", performance: 80 },
          { class: "7", performance: 75 },
          { class: "8", performance: 90 },
        ],
        internalExamPerformance: [
          { class: "5", scores: [80, 75, 75] },
          { class: "6", scores: [82, 76, 83] },
          { class: "7", scores: [85, 90, 95] },
          {class:  "8", scores:   [65, 56, 89] },
        ],
        attendance: 85,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "8",
              ratings: [
                { subject: "Math", rating: 5 },
                { subject: "Science", rating: 3 },
                { subject: "English", rating: 3 },
                { subject: "History", rating: 5 },
                { subject: "Geography", rating: 3 },
                { subject: "Computer", rating: 3 },
              ],
            }
          ],
          activityParticipation: {
            availableActivities: ["Sports", "Music", "Debate", "Art", "Drama"],
            participationHistory: [
              { year: "2022", participated: ["Sports", "Art"] },
              { year: "2023", participated: ["Drama"] },
              { year: "2024", participated: ["Debate", "Drama", "Sports"] }
            ]
          },

          internalExamScores: {
            Math: {
                "Class 5 - Pre Mid Term": 80,
                "Class 5 - Mid Term": 85,
                "Class 5 - Post Mid Term": 78,
                "Class 6 - Pre Mid Term": 87,
                "Class 6 - Mid Term": 78,
                "Class 6 - Post Mid Term": 68,
                "Class 7 - Pre Mid Term": 65,
                "Class 7 - Mid Term": 78,
                "Class 7 - Post Mid Term": 70,
                "Class 8 - Pre Mid Term": 89,
                "Class 8 - Mid Term": 90,
                "Class 8 - Post Mid Term": 96,
            },
            Science: {
                "Class 5 - Pre Mid Term": 80,
                "Class 5 - Mid Term": 85,
                "Class 5 - Post Mid Term": 78,
                "Class 6 - Pre Mid Term": 87,
                "Class 6 - Mid Term": 78,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 82,
                "Class 7 - Mid Term": 78,
                "Class 7 - Post Mid Term": 70,
                "Class 8 - Pre Mid Term": 75,
                "Class 8 - Mid Term": 70,
                "Class 8 - Post Mid Term": 69,
            },
            English: {
                "Class 5 - Pre Mid Term": 80,
                "Class 5 - Mid Term": 85,
                "Class 5 - Post Mid Term": 78,
                "Class 6 - Pre Mid Term": 87,
                "Class 6 - Mid Term": 78,
                "Class 6 - Post Mid Term": 62,
                "Class 7 - Pre Mid Term": 55,
                "Class 7 - Mid Term": 68,
                "Class 7 - Post Mid Term": 70,
                "Class 8 - Pre Mid Term": 65,
                "Class 8 - Mid Term": 45,
                "Class 8 - Post Mid Term": 62,
            },
            History: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 87,
                "Class 8 - Mid Term": 88,
                "Class 8 - Post Mid Term": 86,
              },
              Geography: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 79,
                "Class 8 - Mid Term": 81,
                "Class 8 - Post Mid Term": 87,
              },
              Computer: {
                "Class 5 - Pre Mid Term": 45,
                "Class 5 - Mid Term": 51,
                "Class 5 - Post Mid Term": 60,
                "Class 6 - Pre Mid Term": 60,
                "Class 6 - Mid Term": 75,
                "Class 6 - Post Mid Term": 80,
                "Class 7 - Pre Mid Term": 60,
                "Class 7 - Mid Term": 75,
                "Class 7 - Post Mid Term": 80,
                "Class 8 - Pre Mid Term": 80,
                "Class 8 - Mid Term": 82,
                "Class 8 - Post Mid Term": 88,
              },
          },
          
          
      },
  ];
  

const StudentPerformanceDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Individual Student Performance</h2>

      {/* Student Selector */}
      <div className="mb-4 max-w-xs">
        <Select
          options={students}
          value={selectedStudent}
          onChange={setSelectedStudent}
          placeholder="Search here..."
          className="text-black"
          isSearchable
          noOptionsMessage={() => "Type to search..."}
        />
      </div>

      {/* Student Profile */}
      {selectedStudent && (
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-6">
    {/* Left: Profile Image + Info */}
    <div className="flex items-center gap-4">
      <img
        src={selectedStudent.image}
        alt={selectedStudent.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="text-white">
        <h3 className="text-xl font-semibold">{selectedStudent.name}</h3>
        <p className="text-sm">Class: {selectedStudent.class}</p>
        <p className="text-sm">Section: {selectedStudent.section}</p>
        <p className="text-sm">Roll No: {selectedStudent.rollNumber}</p>
      </div>
    </div>

    {/* Right: Attendance & Behavior */}
    <div className="flex flex-col sm:flex-row gap-28">
      <div className="text-white">
        <h3 className="text-md font-semibold mb-2">Attendance</h3>
        <AttendanceIndicator attendancePercentage={selectedStudent.attendance} />
      </div>
      <div className="text-white">
        <h3 className="text-md font-semibold mb-2">Behavior Ratings</h3>
        <BehaviorRatingIndicator
          ratingsData={selectedStudent.behaviorRatings}
          studentName={selectedStudent.name}
        />
      </div>
    </div>
  </div>
)}
      {/* Divider */}
      <div className="border-t border-gray-600 my-4"></div>
      {/* Chart Section */}
   {selectedStudent && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Final Exam Performance */}
          <FinalExamPerformance
            performanceData={selectedStudent.finalExamPerformance}
            studentName={selectedStudent.name}
          />

          {/* Internal Exam Performance */}
          <InternalExamPerformance
            performanceData={selectedStudent.internalExamPerformance}
            studentName={selectedStudent.name}
          />
        </div>
      )}

      {selectedStudent && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    {/* Activity Participation */}
    <ActivityParticipation
      data={selectedStudent.activityParticipation}
      studentName={selectedStudent.name}
    />
    <AwardsAndImprovements
      awards={selectedStudent.awards}
      improvementActions={selectedStudent.improvementActions}
    />
</div>
  
)}
{selectedStudent && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <FinalExamHeatmap finalExamScores={selectedStudent.finalExamScores} />
     <InternalExamHeatmap internalExamScores={selectedStudent.internalExamScores} />
  </div>
)}
    </div>
  );
};
export default StudentPerformanceDashboard;
