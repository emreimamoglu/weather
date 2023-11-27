import CityImage from "../../components/CityImage";
import FavoriteCities from "../../components/FavoriteCities";
import Forecasts from "../../components/Forecasts";
import Layout from "../../components/Layout";
import Overview from "../../components/Overview";
import { PrecipitationChart } from "../../components/PrecipitationChart";
import "./styles.css";

const Dashboard = () => {
  return (
    <Layout>
      <section id="forecasts-and-precipitation">
        <Forecasts />
        <PrecipitationChart />
      </section>
      <section id="overview-and-favorites">
        <Overview />
        <CityImage />
        <FavoriteCities />
      </section>
    </Layout>
  );
};

export default Dashboard;
