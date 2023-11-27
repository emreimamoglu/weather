import "./styles.css";
import { useUserContext } from "../../contexts/User";
import { format } from "date-fns";
import LoadingSkeleton from "../LoadingSkeleton";

const Forecasts = () => {
  const { selectedCityWeather } = useUserContext();
  return (
    <section id="forecasts">
      <div className="current-day">
        {selectedCityWeather ? (
          <>
            <div className="current-day-header">
              <span>{format(new Date(), "EEEE")}</span>
              <span>{format(new Date(), "h:mm aa")}</span>
            </div>
            <div className="current-day-body">
              <div className="current-day-body-left">
                <span className="temperature">
                  {selectedCityWeather?.current?.temp} &deg;
                </span>
                <span className="item-description">
                  Real Feel{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.feels_like} &deg;
                  </span>
                </span>
                <span className="item-description">
                  Wind{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.wind_speed}km/h
                  </span>
                </span>
                <span className="item-description">
                  Pressure{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.pressure}MB
                  </span>
                </span>
                <span className="item-description">
                  Humidity{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.humidity}%
                  </span>
                </span>
              </div>
              <div className="current-day-body-right">
                <div className="current-weather-symbol">
                  <img
                    src={`https://openweathermap.org/img/wn/${selectedCityWeather?.current?.weather[0]?.icon}@2x.png`}
                  />
                </div>
                <span className="item-description">
                  Sunrise{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.sunrise &&
                      format(
                        new Date(selectedCityWeather?.current?.sunrise * 1000),
                        "h:mm aa"
                      )}
                  </span>
                </span>
                <span className="item-description">
                  Sunset{" "}
                  <span className="item-value">
                    {selectedCityWeather?.current?.sunset &&
                      format(
                        new Date(selectedCityWeather?.current?.sunset * 1000),
                        "h:mm aa"
                      )}
                  </span>
                </span>
              </div>
            </div>
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="forecast-day">
          {selectedCityWeather ? (
            <>
              <span>
                {selectedCityWeather?.daily &&
                  format(
                    new Date(selectedCityWeather?.daily[index + 1]?.dt * 1000),
                    "EEE"
                  )}
              </span>
              <div className="divider"></div>
              <div className="degree-image">
                <img
                  src={`https://openweathermap.org/img/wn/${
                    selectedCityWeather?.daily[index + 1]?.weather[0]?.icon
                  }@2x.png`}
                />
                <span>
                  {selectedCityWeather?.current?.temp &&
                    Number(
                      selectedCityWeather?.daily[index + 1]?.temp?.day
                    ).toFixed(0)}
                  &deg;
                </span>
              </div>
            </>
          ) : (
            <LoadingSkeleton />
          )}
        </div>
      ))}
    </section>
  );
};

export default Forecasts;
