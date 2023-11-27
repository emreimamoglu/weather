import { useEffect } from "react";
import SearchBar from "../../components/Searchbar";
import { useUserContext } from "../../contexts/User";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { selectedCity } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedCity) {
      navigate("/dashboard");
    }
  }, [selectedCity]);

  return (
    <section className="first-city-selection">
      <div className="first-city-selection__inner">
        <h1>Select a city for weather information</h1>
        <SearchBar />
      </div>
    </section>
  );
};

export default Home;
