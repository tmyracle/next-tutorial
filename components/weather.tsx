import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Weather({ weatherData }: { weatherData: any }) {
  let chartData: any = [];
  weatherData.daily.forEach((day: any) => {
    let singleDay: any = {};
    singleDay.formattedDate = new Date(day.dt * 1000).toLocaleDateString();
    singleDay.maxTemp = day.temp.max;
    singleDay.minTemp = day.temp.min;
    chartData.push(singleDay);
  });

  const TiltedAxisLabel = (props: any) => {
    const { x, y, stroke, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#bbb"
          fontSize={10}
          transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div>
      <h3 className="font-medium text-2xl mb-4">Weather in Potrero Hill</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ left: 30, right: 30, bottom: 30, top: 5 }}
        >
          <Line type="monotone" dataKey="minTemp" stroke="#8884d8" />
          <Line type="monotone" dataKey="maxTemp" stroke="#d39785" />
          <CartesianGrid stroke="#ccc" strokeDashArray="5 5" />
          <XAxis
            dataKey="formattedDate"
            tick={<TiltedAxisLabel />}
            interval={0}
          />
          <YAxis domain={[40, 90]} hide={true} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
