
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActivityParticipationChart = ({ data, studentName }) => {
  const { availableActivities, participationHistory } = data;

  const years = participationHistory.map((entry) => entry.year);
  const counts = participationHistory.map((entry) => entry.participated.length);

  const currentYear = Math.max(...participationHistory.map(e => parseInt(e.year)));
  const currentYearActivities = participationHistory.find(e => parseInt(e.year) === currentYear)?.participated || [];

  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: '#1f2937'
    },
    title: {
      text: 'Activity Participation Over the Years',
      style: { color: '#fff' }
    },
    xAxis: {
      categories: years,
      labels: { style: { color: '#ccc' } },
      title: { text: 'Year', style: { color: '#ccc' } }
    },
    yAxis: {
      min: 0,
      title: { text: 'Number of Activities', style: { color: '#ccc' } },
      labels: { style: { color: '#ccc' } }
    },
    legend: {
      itemStyle: { color: '#ccc' }
    },
    tooltip: {
      shared: true,
      backgroundColor: '#333',
      style: { color: '#fff' }
    },
    series: [
      {
        name: 'Activities Participated',
        data: counts,
        color: '#38bdf8'
      }
    ]
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
      {/* <h3 className="text-xl font-semibold mb-4">Extra-Curricular Activity Participation</h3> */}

      <HighchartsReact highcharts={Highcharts} options={chartOptions} />

      <div className="mt-4 text-sm space-y-2">
        <p>Total Available Activities: <span className="font-semibold">{availableActivities.length}</span></p>
        <p>
          {studentName} participated in <span className="font-semibold">{currentYearActivities.length}</span> activities in <span className="font-semibold">{currentYear}</span>: 
          {" "}{currentYearActivities.join(", ")}
        </p>

        <div className="mt-3 space-y-1">
          <h4 className="font-semibold underline">Participation History:</h4>
          {participationHistory.map((entry) => (
            <div key={entry.year}>
              <p>
                <strong>{entry.year}:</strong> {entry.participated.length > 0 ? entry.participated.join(", ") : "No participation"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityParticipationChart;
