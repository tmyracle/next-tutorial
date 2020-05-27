import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/onecall?";
const lat = "37.7605";
const lon = "122.4009";
const units = "imperial";

export const getWeatherData: any = async () => {
  const token = process.env.WEATHER_TOKEN;
  const requestUrl =
    url + "lat=" + lat + "&lon=" + lon + "&units=" + units + "&appId=" + token;
  let weatherData = await axios.get(requestUrl);
  return weatherData.data;
};
