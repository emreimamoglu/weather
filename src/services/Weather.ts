import axios from "axios";

class WeatherService {
  public static getInstance() {
    if (!this.instance) {
      this.instance = new WeatherService();
    }

    return this.instance;
  }

  private static instance: WeatherService;

  public async getWeatherData({ lat, lon, units }: { lat: number; lon: number, units: string }) {
    return axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/weather`,
        {
          params: {
            lat,
            lon,
            units,
            appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
          },
        }
      )
      .then((res) => res.data);
  }
}

export default WeatherService;
