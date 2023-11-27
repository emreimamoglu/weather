import SearchBar from "../Searchbar";
import LocationIcon from "../../assets/icons/location.svg";
import "./styles.css";
import { useUserContext } from "../../contexts/User";

const Header = () => {
  const { selectedCity, setFavoriteCities, favoriteCities, selectedCityWeather } = useUserContext();

  const isCityFavorite = () => {
    return (
      selectedCity?.place_id &&
      favoriteCities.find(
        (city: any) => city?.place_id === selectedCity?.place_id
      )
    );
  };

  const handleFavoriteClick = () => {
    if (!isCityFavorite()) {
      setFavoriteCities([...favoriteCities, {...selectedCity,icon : selectedCityWeather?.current?.weather[0]?.icon}]);
    } else {
      setFavoriteCities(
        favoriteCities.filter(
          (city: any) => city?.place_id !== selectedCity?.place_id
        )
      );
    }
  };

  return (
    <header id="page-header">
      <div className="header-location">
        <img src={LocationIcon} />
        <span>{selectedCity?.name}</span>

        <button onClick={handleFavoriteClick}>
          {isCityFavorite() ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
      <div className="header-searchbar">
        <SearchBar />
      </div>
      {/* <select>
        <option value="standard">Standard</option>
        <option value="imperial">Imperial</option>
        <option value="metric">Metric</option>
      </select> */}
    </header>
  );
};

export default Header;
