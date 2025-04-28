import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const teacherData = [
  { name: "Mr. Sharma", salary: 28000, performance: 72 },
  { name: "Kunaal", salary: 25000, performance: 70 },
  { name: "Karthik", salary: 29000, performance: 82 },
  { name: "Mr. Haris", salary: 28000, performance: 72 },

  { name: "Ms. Rani", salary: 34000, performance: 78 },
  { name: "Mr. Patel", salary: 39000, performance: 80 },
  { name: "Ronak", salary: 31000, performance: 70 },
  { name: "Kadeer", salary: 32000, performance: 82 },

  { name: "Mr. Jabbar", salary: 47000, performance: 85 },
  { name: "Mr. Ayaaz", salary: 48000, performance: 88 },
  { name: "Ms. Inayat", salary: 44000, performance: 92 },

  { name: "Ms. Sufi", salary: 52000, performance: 78 },
  { name: "Mr. Patel", salary: 53000, performance: 78 },
  { name: "Ms. Sawita", salary: 59000, performance: 78 },

  { name: "Ms. Shweta", salary: 63000, performance: 78 },
  { name: "Mr. Bhartesh", salary: 64500, performance: 78 },
  { name: "Ms. Pritam", salary: 61200, performance: 78 },
  { name: "Mr. Anand", salary: 60800, performance: 78 },
];

const salaryRanges = [
  { label: "20k-30k", min: 20000, max: 30000 },
  { label: "30k-40k", min: 30000, max: 40000 },
  { label: "40k-50k", min: 40000, max: 50000 },
  { label: "50k-60k", min: 50000, max: 60000 },
  { label: "60k-70k", min: 60000, max: 70000 },
];

const DrilldownChart = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#60A5FA"); // default color

  const colorPalette = ["#60A5FA", "#34D399", "#FBBF24", "#F87171", "#A78BFA"];

  const overviewData = salaryRanges.map((range, index) => {
    const teachers = teacherData.filter(
      (t) => t.salary >= range.min && t.salary <= range.max
    );
    const avgPerformance =
      teachers.reduce((sum, t) => sum + t.performance, 0) / (teachers.length || 1);

    return {
      name: range.label,
      y: parseFloat(avgPerformance.toFixed(2)),
      color: colorPalette[index % colorPalette.length], // assign color from palette
    };
  });

  const getOverviewOptions = () => ({
    chart: {
      type: "column",
      backgroundColor: "#1F2937",
    },
    title: {
      text: "Performance by Salary Range",
      style: { color: "#F9FAFB" },
    },
    xAxis: {
      type: "category",
      labels: { style: { color: "#F9FAFB" } },
    },
    yAxis: {
      title: { text: "Performance %", style: { color: "#F9FAFB" } },
      labels: { style: { color: "#F9FAFB" } },
      gridLineColor: "#374151",
    },
    tooltip: {
      backgroundColor: "#111827",
      style: { color: "#F9FAFB" },
      formatter: function () {
        return `<b>${this.point.name}</b><br/>Performance: ${this.point.y}%`;
      },
      useHTML: true,
    },
    series: [
      {
        name: "Salary Ranges",
        colorByPoint: false,
        data: overviewData.map((d) => ({
          ...d,
          events: {
            click: function () {
              const range = salaryRanges.find((r) => r.label === d.name);
              setSelectedRange(range);
              setSelectedColor(d.color); // store selected color
            },
          },
        })),
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  });

  const getDrilldownOptions = () => {
    const filtered = teacherData.filter(
      (t) => t.salary >= selectedRange.min && t.salary <= selectedRange.max
    );

    return {
      chart: {
        type: "column",
        backgroundColor: "#1F2937",
      },
      title: {
        text: `Performance of Teachers in ${selectedRange.label}`,
        style: { color: "#F9FAFB" },
      },
      xAxis: {
        categories: filtered.map((t) => t.name),
        labels: { style: { color: "#F9FAFB" } },
        title: { text: "Teacher", style: { color: "#F9FAFB" } },
      },
      yAxis: {
        title: { text: "Performance %", style: { color: "#F9FAFB" } },
        labels: { style: { color: "#F9FAFB" } },
        gridLineColor: "#374151",
      },
      tooltip: {
        backgroundColor: "#111827",
        style: { color: "#F9FAFB" },
        pointFormat: "<b>{point.y}%</b>",
      },
      series: [
        {
          name: "Performance",
          data: filtered.map((t) => ({
            name: t.name,
            y: t.performance,
            color: selectedColor, // apply selected color
          })),
        },
      ],
      credits: { enabled: false },
      legend: { enabled: false },
    };
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 text-white">
      <div style={{ minHeight: "400px" }}>
        {!selectedRange ? (
          <HighchartsReact highcharts={Highcharts} options={getOverviewOptions()} />
        ) : (
          <>
            <div className="mb-4 text-white">
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => {
                  setSelectedRange(null);
                  setSelectedColor("#60A5FA");
                }}
              >
                Main
              </span>{" "}
              / <span className="text-gray-300">{selectedRange.label}</span>
            </div>

            <HighchartsReact highcharts={Highcharts} options={getDrilldownOptions()} />
          </>
        )}
      </div>
    </div>
  );
};

export default DrilldownChart;
