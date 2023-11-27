import "./styles.css";
import RainySunny from "../../assets/icons/rainysunny.svg";
import { useUserContext } from "../../contexts/User";
import CloseIcon from "../../assets/icons/close.svg";

const FavoriteCities = () => {
  const { favoriteCities,setFavoriteCities,setSelectedCity } = useUserContext();

  const removeFromFavorites = (city : any) => {
    setFavoriteCities(favoriteCities.filter((item : any) => item.place_id !== city.place_id));
  };

  return (
    <div className="favorite-cities">
      <h6>Favorite Cities</h6>
      <div className="cities-list">
        {favoriteCities.length > 0 ? (
          favoriteCities.map((city : any) => (
            <div className="city" onClick={() => setSelectedCity(city)}>
              <div className="city-info">
                <span>{city.name}</span>
              </div>
              <div className="info-image">
                <img src={`https://openweathermap.org/img/wn/${
                    city?.icon
                  }@2x.png`} alt="City" />
              </div>
              <div className="remove-icon" onClick={() => removeFromFavorites(city)}>
                <img src={CloseIcon} />
              </div>
            </div>
          ))
        ) : (
          <div className="no-favorites">
            <span>No favorite cities yet</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteCities;
