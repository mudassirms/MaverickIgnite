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
        Math: { "Grade 5": 48, "Grade 6": 53, "Grade 7": 60, "Grade 8": 80 },
        Science: { "Grade 5": 62, "Grade 6": 68, "Grade 7": 70, "Grade 8": 80 },
        English: { "Grade 5": 85, "Grade 6": 80, "Grade 7": 88, "Grade 8": 95 },
        History: { "Grade 5": 47, "Grade 6": 52, "Grade 7": 73, "Grade 8": 80 },
        Geography: { "Grade 5": 45, "Grade 6": 50, "Grade 7": 68, "Grade 8": 82 },
        Computer: { "Grade 5": 40, "Grade 6": 54, "Grade 7": 70, "Grade 8": 81 }, 


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
      attendance: 95,
      behaviorRatings: [
        {
          class: "9",
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
            { class: "5", participated: ["Sports", "Art"] },
            { class: "6", participated: ["Drama"] },
            { class: "7", participated: ["Drama", "Sports"] },
            { class: "8", participated: ["Sports", "Art"] }

        ]
      }, 
      internalExamScores: {
        Math: {
          "Grade 5 - Pre Mid Term": 41,
          "Grade 5 - Mid Term": 49,
          "Grade 5 - Post Mid Term": 50,
          "Grade 6 - Pre Mid Term": 60,
          "Grade 6 - Mid Term": 62,
          "Grade 6 - Post Mid Term": 75,
          "Grade 7 - Pre Mid Term": 59,
          "Grade 7 - Mid Term": 62,
          "Grade 7 - Post Mid Term": 68,
          "Grade 8 - Pre Mid Term": 70,
          "Grade 8 - Mid Term": 72,
          "Grade 8 - Post Mid Term": 80,
        },
        Science: {
          "Grade 5 - Pre Mid Term": 50,
          "Grade 5 - Mid Term": 60,
          "Grade 5 - Post Mid Term": 65,
          "Grade 6 - Pre Mid Term": 75,
          "Grade 6 - Mid Term": 74,
          "Grade 6 - Post Mid Term": 80,
          "Grade 7 - Pre Mid Term": 49,
          "Grade 7 - Mid Term": 58,
          "Grade 7 - Post Mid Term": 62,
          "Grade 8 - Pre Mid Term": 58,
          "Grade 8 - Mid Term": 60,
          "Grade 8 - Post Mid Term": 69,
        },
        English: {
          "Grade 5 - Pre Mid Term": 90,
          "Grade 5 - Mid Term": 65,
          "Grade 5 - Post Mid Term": 70,
          "Grade 6 - Pre Mid Term": 85,
          "Grade 6 - Mid Term": 88,
          "Grade 6 - Post Mid Term": 90,
          "Grade 7 - Pre Mid Term": 85,
          "Grade 7 - Mid Term": 88,
          "Grade 7 - Post Mid Term": 90,
          "Grade 8 - Pre Mid Term": 78,
          "Grade 8 - Mid Term": 79,
          "Grade 8 - Post Mid Term": 80,

        },
        History: {
            "Grade 5 - Pre Mid Term": 45,
            "Grade 5 - Mid Term": 51,
            "Grade 5 - Post Mid Term": 52,
            "Grade 6 - Pre Mid Term": 49,
            "Grade 6 - Mid Term": 56,
            "Grade 6 - Post Mid Term": 65,
            "Grade 7 - Pre Mid Term": 64,
            "Grade 7 - Mid Term": 68,
            "Grade 7 - Post Mid Term": 70,
            "Grade 8 - Pre Mid Term": 74,
            "Grade 8 - Mid Term": 74,
            "Grade 8 - Post Mid Term": 70,
          },
          Geography: {
            "Grade 5 - Pre Mid Term": 45,
            "Grade 5 - Mid Term": 51,
            "Grade 5 - Post Mid Term": 60,
            "Grade 6 - Pre Mid Term": 60,
            "Grade 6 - Mid Term": 75,
            "Grade 6 - Post Mid Term": 80,
            "Grade 7 - Pre Mid Term": 60,
            "Grade 7 - Mid Term": 75,
            "Grade 7 - Post Mid Term": 80,
            "Grade 8 - Pre Mid Term": 75,
            "Grade 8 - Mid Term": 80,
            "Grade 8 - Post Mid Term": 81,
          },
          Computer: {
            "Grade 5 - Pre Mid Term": 45,
            "Grade 5 - Mid Term": 51,
            "Grade 5 - Post Mid Term": 60,
            "Grade 6 - Pre Mid Term": 60,
            "Grade 6 - Mid Term": 65,
            "Grade 6 - Post Mid Term": 70,
            "Grade 7 - Pre Mid Term": 69,
            "Grade 7 - Mid Term": 74,
            "Grade 7 - Post Mid Term": 78,
            "Grade 8 - Pre Mid Term": 75,
            "Grade 8 - Mid Term": 78,
            "Grade 8 - Post Mid Term": 80,
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
        Math: { "Grade 5": 83, "Grade 6": 81, "Grade 7": 87, "Grade 8": 90 },
        Science: { "Grade 5": 77, "Grade 6": 74, "Grade 7": 80, "Grade 8": 84 },
        English: { "Grade 5": 90, "Grade 6": 88, "Grade 7": 91, "Grade 8": 93 },
        History: { "Grade 5": 68, "Grade 6": 71, "Grade 7": 75, "Grade 8": 79 },
        Geography: { "Grade 5": 58, "Grade 6": 56, "Grade 7": 65, "Grade 8": 75 },
        Computer: { "Grade 5": 49, "Grade 6": 61, "Grade 7": 73, "Grade 8": 80 },
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
          class: "9",
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
          { class: "5", participated: ["Sports", "Art"] },
          { class: "6", participated: ["Drama"] },
          { class: "7", participated: ["Debate", "Drama", "Sports"] },
          { class: "8", participated: ["Sports", "Art"] }

        ]
      },
      internalExamScores: {
        Math: {
          "Grade 5 - Pre Mid Term": 73,
          "Grade 5 - Mid Term": 70,
          "Grade 5 - Post Mid Term": 77,
          "Grade 6 - Pre Mid Term": 65,
          "Grade 6 - Mid Term": 60,
          "Grade 6 - Post Mid Term": 68,
          "Grade 7 - Pre Mid Term": 80,
          "Grade 7 - Mid Term": 89,
          "Grade 7 - Post Mid Term": 85,
          "Grade 8 - Pre Mid Term": 65,
          "Grade 8 - Mid Term": 75,
          "Grade 8 - Post Mid Term": 85,
        },
        Science: {
          "Grade 5 - Pre Mid Term": 78,
          "Grade 5 - Mid Term": 87,
          "Grade 5 - Post Mid Term": 79,
          "Grade 6 - Pre Mid Term": 65,
          "Grade 6 - Mid Term": 60,
          "Grade 6 - Post Mid Term": 68,
          "Grade 7 - Pre Mid Term": 65,
          "Grade 7 - Mid Term": 80,
          "Grade 7 - Post Mid Term": 89,
          "Grade 8 - Pre Mid Term": 98,
          "Grade 8 - Mid Term": 89,
          "Grade 8 - Post Mid Term": 90,
        },
        English: {
         "Grade 5 - Pre Mid Term": 73,
          "Grade 5 - Mid Term": 70,
          "Grade 5 - Post Mid Term": 77,
          "Grade 6 - Pre Mid Term": 80,
          "Grade 6 - Mid Term": 60,
          "Grade 6 - Post Mid Term": 50,
          "Grade 7 - Pre Mid Term": 60,
          "Grade 7 - Mid Term": 60,
          "Grade 7 - Post Mid Term": 70,
          "Grade 8 - Pre Mid Term": 60,
          "Grade 8 - Mid Term": 80,
          "Grade 8 - Post Mid Term": 90,
        },
        History: {
         "Grade 5 - Pre Mid Term": 73,
          "Grade 5 - Mid Term": 70,
          "Grade 5 - Post Mid Term": 77,
          "Grade 6 - Pre Mid Term": 65,
          "Grade 6 - Mid Term": 60,
          "Grade 6 - Post Mid Term": 68,
          "Grade 7 - Pre Mid Term": 65,
          "Grade 7 - Mid Term": 60,
          "Grade 7 - Post Mid Term": 68,
          "Grade 8 - Pre Mid Term": 65,
          "Grade 8 - Mid Term": 80,
          "Grade 8 - Post Mid Term": 90,
        },
        Geography: {
            "Grade 5 - Pre Mid Term": 65,
             "Grade 5 - Mid Term": 69,
             "Grade 5 - Post Mid Term": 70,
             "Grade 6 - Pre Mid Term": 71,
             "Grade 6 - Mid Term": 69,
             "Grade 6 - Post Mid Term": 74,
             "Grade 7 - Pre Mid Term": 70,
             "Grade 7 - Mid Term": 74,
             "Grade 7 - Post Mid Term": 73,
             "Grade 8 - Pre Mid Term": 69,
             "Grade 8 - Mid Term": 68,
             "Grade 8 - Post Mid Term": 75,
           },
           Computer: {
            "Grade 5 - Pre Mid Term": 74,
             "Grade 5 - Mid Term": 69,
             "Grade 5 - Post Mid Term": 69,
             "Grade 6 - Pre Mid Term": 70,
             "Grade 6 - Mid Term": 80,
             "Grade 6 - Post Mid Term": 69,
             "Grade 7 - Pre Mid Term": 73,
             "Grade 7 - Mid Term": 79,
             "Grade 7 - Post Mid Term": 84,
             "Grade 8 - Pre Mid Term": 65,
             "Grade 8 - Mid Term": 80,
             "Grade 8 - Post Mid Term": 90,
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
            Math: { "Grade 5": 48, "Grade 6": 53, "Grade 7": 60, "Grade 8": 80 },
            Science: { "Grade 5": 35, "Grade 6": 59, "Grade 7": 75, "Grade 8": 79 },
            English: { "Grade 5": 40, "Grade 6": 57, "Grade 7": 65, "Grade 8": 81 },
            History: { "Grade 5": 47, "Grade 6": 52, "Grade 7": 73, "Grade 8": 80 },
            Geography: { "Grade 5": 45, "Grade 6": 50, "Grade 7": 68, "Grade 8": 82 },
            Computer: { "Grade 5": 40, "Grade 6": 54, "Grade 7": 70, "Grade 8": 81 }, 
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
        attendance: 72,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "9",
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
              { class: "5", participated: ["Sports", "Art"] },
              { class: "6", participated: ["Drama"] },
              { class: "7", participated: ["Debate", "Drama", "Sports"] },
              { class: "8", participated: ["Sports", "Art"] }

            ]
          },
          internalExamScores: {
            Math: {
              "Grade 5 - Pre Mid Term": 70,
          "Grade 5 - Mid Term": 74,
          "Grade 5 - Post Mid Term": 70,
          "Grade 6 - Pre Mid Term": 60,
          "Grade 6 - Mid Term": 56,
          "Grade 6 - Post Mid Term": 68,
          "Grade 7 - Pre Mid Term": 69,
          "Grade 7 - Mid Term": 70,
          "Grade 7 - Post Mid Term": 74,
          "Grade 8 - Pre Mid Term": 74,
          "Grade 8 - Mid Term": 68,
          "Grade 8 - Post Mid Term": 74,
            },
            Science: {
              "Grade 5 - Pre Mid Term": 33,
          "Grade 5 - Mid Term": 40,
          "Grade 5 - Post Mid Term": 56,
          "Grade 6 - Pre Mid Term": 60,
          "Grade 6 - Mid Term": 62,
          "Grade 6 - Post Mid Term": 64,
          "Grade 7 - Pre Mid Term": 39,
          "Grade 7 - Mid Term": 57,
          "Grade 7 - Post Mid Term": 70,
          "Grade 8 - Pre Mid Term": 70,
          "Grade 8 - Mid Term": 72,
          "Grade 8 - Post Mid Term": 80,
            },
            English: {
             "Grade 5 - Pre Mid Term": 81,
          "Grade 5 - Mid Term": 70,
          "Grade 5 - Post Mid Term": 77,
          "Grade 6 - Pre Mid Term": 65,
          "Grade 6 - Mid Term": 76,
          "Grade 6 - Post Mid Term": 80,
          "Grade 7 - Pre Mid Term": 75,
          "Grade 7 - Mid Term": 74,
          "Grade 7 - Post Mid Term": 78,
          "Grade 8 - Pre Mid Term": 80,
          "Grade 8 - Mid Term": 81,
          "Grade 8 - Post Mid Term": 85,
            },
            History: {
             "Grade 5 - Pre Mid Term": 73,
          "Grade 5 - Mid Term": 80,
          "Grade 5 - Post Mid Term": 85,
          "Grade 6 - Pre Mid Term": 78,
          "Grade 6 - Mid Term": 87,
          "Grade 6 - Post Mid Term": 47,
          "Grade 7 - Pre Mid Term": 65,
          "Grade 7 - Mid Term": 80,
          "Grade 7 - Post Mid Term": 68,
          "Grade 8 - Pre Mid Term": 65,
          "Grade 8 - Mid Term": 80,
          "Grade 8 - Post Mid Term": 90,
            },
            Geography: {
                "Grade 5 - Pre Mid Term": 80,
                 "Grade 5 - Mid Term": 74,
                 "Grade 5 - Post Mid Term": 75,
                 "Grade 6 - Pre Mid Term": 60,
                 "Grade 6 - Mid Term": 63,
                 "Grade 6 - Post Mid Term": 69,
                 "Grade 7 - Pre Mid Term": 70,
                 "Grade 7 - Mid Term": 71,
                 "Grade 7 - Post Mid Term": 72,
                 "Grade 8 - Pre Mid Term": 76,
                 "Grade 8 - Mid Term": 80,
                 "Grade 8 - Post Mid Term": 90,
               },
               Computer: {
                "Grade 5 - Pre Mid Term": 74,
                 "Grade 5 - Mid Term": 80,
                 "Grade 5 - Post Mid Term": 82,
                 "Grade 6 - Pre Mid Term": 86,
                 "Grade 6 - Mid Term": 83,
                 "Grade 6 - Post Mid Term": 76,
                 "Grade 7 - Pre Mid Term": 75,
                 "Grade 7 - Mid Term": 75,
                 "Grade 7 - Post Mid Term": 78,
                 "Grade 8 - Pre Mid Term": 84,
                 "Grade 8 - Mid Term": 86,
                 "Grade 8 - Post Mid Term": 92,
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
            Math: { "Grade 5": 48, "Grade 6": 53, "Grade 7": 60, "Grade 8": 80 },
            Science: { "Grade 5": 35, "Grade 6": 59, "Grade 7": 70, "Grade 8": 79 },
            English: { "Grade 5": 40, "Grade 6": 57, "Grade 7": 65, "Grade 8": 81 },
            History: { "Grade 5": 47, "Grade 6": 52, "Grade 7": 73, "Grade 8": 80 },
            Geography: { "Grade 5": 45, "Grade 6": 50, "Grade 7": 68, "Grade 8": 82 },
            Computer: { "Grade 5": 40, "Grade 6": 54, "Grade 7": 70, "Grade 8": 81 }, 
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
        attendance: 48,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "9",
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
              { class: "5", participated: ["Sports", "Art"] },
              { class: "6", participated: []},
              { class: "7", participated: ["Debate", "Drama", "Sports"] },
              { class: "8", participated: ["Sports", "Art"] }
            ]
          },

          internalExamScores: {
            Math: {
          "Grade 5 - Pre Mid Term": 53,
          "Grade 5 - Mid Term": 52,
          "Grade 5 - Post Mid Term": 55,
          "Grade 6 - Pre Mid Term": 60,
          "Grade 6 - Mid Term": 61,
          "Grade 6 - Post Mid Term": 65,
          "Grade 7 - Pre Mid Term": 69,
          "Grade 7 - Mid Term": 68,
          "Grade 7 - Post Mid Term": 69,
          "Grade 8 - Pre Mid Term": 71,
          "Grade 8 - Mid Term": 70,
          "Grade 8 - Post Mid Term": 85,
            },
         Science: {
             "Grade 5 - Pre Mid Term": 78,
             "Grade 5 - Mid Term": 80,
             "Grade 5 - Post Mid Term": 78,
             "Grade 6 - Pre Mid Term": 87,
             "Grade 6 - Mid Term": 65,
             "Grade 6 - Post Mid Term": 69,
             "Grade 7 - Pre Mid Term": 70,
             "Grade 7 - Mid Term": 72,
             "Grade 7 - Post Mid Term": 74,
             "Grade 8 - Pre Mid Term": 65,
             "Grade 8 - Mid Term": 58,
             "Grade 8 - Post Mid Term": 62,
            },
         English: {
            "Grade 5 - Pre Mid Term": 80,
            "Grade 5 - Mid Term": 85,
            "Grade 5 - Post Mid Term": 78,
            "Grade 6 - Pre Mid Term": 87,
            "Grade 6 - Mid Term": 78,
            "Grade 6 - Post Mid Term": 80,
            "Grade 7 - Pre Mid Term": 82,
            "Grade 7 - Mid Term": 78,
            "Grade 7 - Post Mid Term": 70,
            "Grade 8 - Pre Mid Term": 65,
            "Grade 8 - Mid Term": 45,
            "Grade 8 - Post Mid Term": 62,
            },
         History: {
            "Grade 5 - Pre Mid Term": 53,
            "Grade 5 - Mid Term": 52,
            "Grade 5 - Post Mid Term": 55,
            "Grade 6 - Pre Mid Term": 60,
            "Grade 6 - Mid Term": 61,
            "Grade 6 - Post Mid Term": 65,
            "Grade 7 - Pre Mid Term": 69,
            "Grade 7 - Mid Term": 68,
            "Grade 7 - Post Mid Term": 69,
            "Grade 8 - Pre Mid Term": 71,
            "Grade 8 - Mid Term": 70,
            "Grade 8 - Post Mid Term": 85,
          },

         Geography: {
            "Grade 5 - Pre Mid Term": 53,
            "Grade 5 - Mid Term": 52,
            "Grade 5 - Post Mid Term": 55,
            "Grade 6 - Pre Mid Term": 60,
            "Grade 6 - Mid Term": 61,
            "Grade 6 - Post Mid Term": 65,
            "Grade 7 - Pre Mid Term": 69,
            "Grade 7 - Mid Term": 68,
            "Grade 7 - Post Mid Term": 69,
            "Grade 8 - Pre Mid Term": 71,
            "Grade 8 - Mid Term": 70,
            "Grade 8 - Post Mid Term": 85,
            },
            Computer: {
                "Grade 5 - Pre Mid Term": 53,
                "Grade 5 - Mid Term": 52,
                "Grade 5 - Post Mid Term": 55,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 61,
                "Grade 6 - Post Mid Term": 65,
                "Grade 7 - Pre Mid Term": 69,
                "Grade 7 - Mid Term": 68,
                "Grade 7 - Post Mid Term": 69,
                "Grade 8 - Pre Mid Term": 71,
                "Grade 8 - Mid Term": 70,
                "Grade 8 - Post Mid Term": 85,
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
            Math: { "Grade 5": 83, "Grade 6": 81, "Grade 7": 87, "Grade 8": 90 },
            Science: { "Grade 5": 77, "Grade 6": 74, "Grade 7": 80, "Grade 8": 84 },
            English: { "Grade 5": 90, "Grade 6": 88, "Grade 7": 91, "Grade 8": 93 },
            History: { "Grade 5": 70, "Grade 6": 78, "Grade 7": 80, "Grade 8": 90 },
            Geography: { "Grade 5": 75, "Grade 6": 70, "Grade 7": 73, "Grade 8": 79 },
            Computer: { "Grade 5": 62, "Grade 6": 68, "Grade 7": 67, "Grade 8": 69 },          },

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
        attendance: 59,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "9",
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
              { class: "5", participated: ["Sports", "Art"] },
              { class: "6", participated: ["Drama"] },
              { class: "7", participated: ["Debate", "Sports"] },
              { class: "8", participated: ["Sports", "Art"] }

            ]
          },

          internalExamScores: {
            Math: {
                "Grade 5 - Pre Mid Term": 84,
                "Grade 5 - Mid Term": 82,
                "Grade 5 - Post Mid Term": 80,
                "Grade 6 - Pre Mid Term": 87,
                "Grade 6 - Mid Term": 88,
                "Grade 6 - Post Mid Term": 85,
                "Grade 7 - Pre Mid Term": 86,
                "Grade 7 - Mid Term": 80,
                "Grade 7 - Post Mid Term": 84,
                "Grade 8 - Pre Mid Term": 96,
                "Grade 8 - Mid Term": 90,
                "Grade 8 - Post Mid Term": 98,
            },
            Science: {
                "Grade 5 - Pre Mid Term": 45,
          "Grade 5 - Mid Term": 51,
          "Grade 5 - Post Mid Term": 60,
          "Grade 6 - Pre Mid Term": 60,
          "Grade 6 - Mid Term": 75,
          "Grade 6 - Post Mid Term": 80,
          "Grade 7 - Pre Mid Term": 60,
          "Grade 7 - Mid Term": 75,
          "Grade 7 - Post Mid Term": 80,
          "Grade 8 - Pre Mid Term": 80,
          "Grade 8 - Mid Term": 82,
          "Grade 8 - Post Mid Term": 85,
            },
            English: {
                "Grade 5 - Pre Mid Term": 80,
                "Grade 5 - Mid Term": 85,
                "Grade 5 - Post Mid Term": 78,
                "Grade 6 - Pre Mid Term": 87,
                "Grade 6 - Mid Term": 78,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 82,
                "Grade 7 - Mid Term": 78,
                "Grade 7 - Post Mid Term": 70,
                "Grade 8 - Pre Mid Term": 65,
                "Grade 8 - Mid Term": 45,
                "Grade 8 - Post Mid Term": 62,
            },
            History: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 87,
                "Grade 8 - Mid Term": 88,
                "Grade 8 - Post Mid Term": 86,
              },
              Geography: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 79,
                "Grade 8 - Mid Term": 81,
                "Grade 8 - Post Mid Term": 87,
              },
              Computer: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 80,
                "Grade 8 - Mid Term": 82,
                "Grade 8 - Post Mid Term": 88,
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
            Math: { "Grade 5": 70, "Grade 6": 70, "Grade 7": 80, "Grade 8": 85 },
            Science: { "Grade 5": 77, "Grade 6": 74, "Grade 7": 80, "Grade 8": 84 },
            English: { "Grade 5": 90, "Grade 6": 88, "Grade 7": 91, "Grade 8": 93 },
            History: { "Grade 5": 70, "Grade 6": 78, "Grade 7": 80, "Grade 8": 90 },
            Geography: { "Grade 5": 75, "Grade 6": 70, "Grade 7": 73, "Grade 8": 79 },
            Computer: { "Grade 5": 62, "Grade 6": 68, "Grade 7": 67, "Grade 8": 69 },          },

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
        attendance: 60,   // 🟠 <--- Add attendance field
        behaviorRatings: [
            {
              class: "9",
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
              { class: "5", participated: ["Sports"] },
              { class: "6", participated: ["Drama"] },
              { class: "7", participated: [ "Drama", "Sports"] },
              { class: "8", participated: ["Sports", "Art"] }
            ]
          },          

          internalExamScores: {
            Math: {
                "Grade 5 - Pre Mid Term": 80,
                "Grade 5 - Mid Term": 85,
                "Grade 5 - Post Mid Term": 78,
                "Grade 6 - Pre Mid Term": 87,
                "Grade 6 - Mid Term": 78,
                "Grade 6 - Post Mid Term": 68,
                "Grade 7 - Pre Mid Term": 65,
                "Grade 7 - Mid Term": 78,
                "Grade 7 - Post Mid Term": 70,
                "Grade 8 - Pre Mid Term": 89,
                "Grade 8 - Mid Term": 90,
                "Grade 8 - Post Mid Term": 96,
            },
            Science: {
                "Grade 5 - Pre Mid Term": 80,
                "Grade 5 - Mid Term": 85,
                "Grade 5 - Post Mid Term": 78,
                "Grade 6 - Pre Mid Term": 87,
                "Grade 6 - Mid Term": 78,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 82,
                "Grade 7 - Mid Term": 78,
                "Grade 7 - Post Mid Term": 70,
                "Grade 8 - Pre Mid Term": 75,
                "Grade 8 - Mid Term": 70,
                "Grade 8 - Post Mid Term": 69,
            },
            English: {
                "Grade 5 - Pre Mid Term": 80,
                "Grade 5 - Mid Term": 85,
                "Grade 5 - Post Mid Term": 78,
                "Grade 6 - Pre Mid Term": 87,
                "Grade 6 - Mid Term": 78,
                "Grade 6 - Post Mid Term": 62,
                "Grade 7 - Pre Mid Term": 55,
                "Grade 7 - Mid Term": 68,
                "Grade 7 - Post Mid Term": 70,
                "Grade 8 - Pre Mid Term": 65,
                "Grade 8 - Mid Term": 45,
                "Grade 8 - Post Mid Term": 62,
            },
            History: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 87,
                "Grade 8 - Mid Term": 88,
                "Grade 8 - Post Mid Term": 86,
              },
              Geography: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 79,
                "Grade 8 - Mid Term": 81,
                "Grade 8 - Post Mid Term": 87,
              },
              Computer: {
                "Grade 5 - Pre Mid Term": 45,
                "Grade 5 - Mid Term": 51,
                "Grade 5 - Post Mid Term": 60,
                "Grade 6 - Pre Mid Term": 60,
                "Grade 6 - Mid Term": 75,
                "Grade 6 - Post Mid Term": 80,
                "Grade 7 - Pre Mid Term": 60,
                "Grade 7 - Mid Term": 75,
                "Grade 7 - Post Mid Term": 80,
                "Grade 8 - Pre Mid Term": 80,
                "Grade 8 - Mid Term": 82,
                "Grade 8 - Post Mid Term": 88,
              },
          },
          
          
      },
  ];
  

  const StudentPerformanceDashboard = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    return (
<div className="bg-gradient-to-r from-slate-700 to-cyan-600 rounded-lg shadow-md p-6 space-y-6">
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
            <div className="flex items-center gap-6">
              <img
                src={selectedStudent.image}
                alt={selectedStudent.name}
                className="w-64 h-64 rounded-full object-cover"
              />
              <div className="text-white space-y-2">
                <h3 className="text-4xl font-bold">{selectedStudent.name}</h3>
                <p className="text-xl font-semibold">Grade: {selectedStudent.class}</p>
                <p className="text-xl font-semibold">Section: {selectedStudent.section}</p>
                <p className="text-xl font-semibold">Roll No: {selectedStudent.rollNumber}</p>
              </div>
            </div>
  
            {/* Right: Attendance & Behavior */}
            <div className="flex flex-col sm:flex-row gap-28">
              <div className="text-white">
                <h3 className="text-md text-center font-semibold mb-4">Attendance</h3>
                <AttendanceIndicator attendancePercentage={selectedStudent.attendance} />
              </div>
              <div className="text-white">
                <h3 className="text-md text-center font-semibold mb-2">Behavior Ratings</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FinalExamHeatmap finalExamScores={selectedStudent.finalExamScores} />
            <InternalExamHeatmap internalExamScores={selectedStudent.internalExamScores} />
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
      </div>
    );
  };
  
export default StudentPerformanceDashboard;
