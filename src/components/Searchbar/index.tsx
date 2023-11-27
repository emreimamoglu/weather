import { useState, useEffect, useCallback } from "react";
import "./styles.css";
import SearchIcon from "../../assets/icons/search.svg";
import PlacesService from "../../services/Places";
import { useUserContext } from "../../contexts/User";
import WeatherService from "../../services/Weather";
import { debounce } from "../../utils";

const SearchBar = () => {
  const {
    setSelectedCity,
    selectedCity,
    setSelectedCityWeather,
    setLoadingCity,
    setLoadingWeather,
  } = useUserContext();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchQuery: string) => {
    setLoadingCity(true);
    try {
      const response = await PlacesService.getInstance().getPlaces(searchQuery);
      setSuggestions(response.results || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoadingCity(false);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 400),
    []
  );

  useEffect(() => {
    if (query.length > 0) {
      debouncedFetchSuggestions(query);
    }
  }, [query]);

  useEffect(() => {
    if (selectedCity) {
      setLoadingWeather(true);
      WeatherService.getInstance()
        .getWeatherData({
          lat: selectedCity.geometry.location.lat,
          lon: selectedCity.geometry.location.lng,
          units: "metric",
        })
        .then((response) => {
          setSelectedCityWeather(response);
        })
        .finally(() => {
          setLoadingWeather(false);
        });
    }
  }, [selectedCity]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <img className="search-icon" src={SearchIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion : any, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedCity(suggestion);
                setQuery("");
                setSuggestions([]);
              }}
            >
              {suggestion.formatted_address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
