import "./styles.css";
import SunIcon from "../../assets/icons/sunicon.svg";
import { useUserContext } from "../../contexts/User";
import LoadingSkeleton from "../LoadingSkeleton";

const Overview = () => {
  const { selectedCityWeather } = useUserContext();
  return (
    <section className="overview-section">
      <h5>Todays Overview</h5>
      <div className="data-cards">
        {selectedCityWeather ? (
          <>
            <div className="data-card">
              <span>Wind Status</span>
              <div className="icon-and-data">
                <img src={SunIcon} alt="Wind Status" />
                <div className="status-result">
                  <span>{selectedCityWeather?.current?.wind_speed}</span>
                  <span>mph</span>
                </div>
              </div>
            </div>

            <div className="data-card">
              <span>UV Index</span>
              <div className="icon-and-data">
                <img src={SunIcon} alt="Wind Status" />
                <div className="status-result">
                  <span>{selectedCityWeather?.current?.uvi}</span>
                  <span>uv</span>
                </div>
              </div>
            </div>

            <div className="data-card">
              <span>Humidity</span>
              <div className="icon-and-data">
                <img src={SunIcon} alt="Wind Status" />
                <div className="status-result">
                  <span>{selectedCityWeather?.current?.humidity}</span>
                  <span>%</span>
                </div>
              </div>
            </div>

            <div className="data-card">
              <span>Visibility</span>
              <div className="icon-and-data">
                <img src={SunIcon} alt="Wind Status" />
                <div className="status-result">
                  <span>{selectedCityWeather?.current?.visibility / 1000}</span>
                  <span>km</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          Array.from({ length: 4 }).map((_, i) => (
            <div className="data-card" key={i}>
              <LoadingSkeleton />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Overview;
