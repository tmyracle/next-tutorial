export default function Weather({ weatherData }: { weatherData: any }) {
  return <div className="p-6">{weatherData.daily[0].sunrise}</div>;
}
