import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import "./styles.css";
import { useUserContext } from "../../contexts/User";
import { format } from "date-fns";
import LoadingSkeleton from "../LoadingSkeleton";

export const options = {
  responsive: true,
};

export const PrecipitationChart = () => {
  const { selectedCityWeather } = useUserContext();

  const data = {
    labels: Array.from({ length: 7 }, (_, i) => {
      if (!selectedCityWeather?.hourly) return;
      return format(
        new Date(selectedCityWeather?.hourly[i].dt * 1000),
        "h:mm aa"
      );
    }),
    datasets: [
      {
        label: "Chance of Precipitation",
        data: Array.from(
          { length: 7 },
          (_, i) => selectedCityWeather?.hourly[i].pop
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="precipitation-chart">
      {selectedCityWeather ? (
        <Line data={data} options={options} />
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};
