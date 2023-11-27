import { useUserContext } from "../../contexts/User";
import LoadingSkeleton from "../LoadingSkeleton";
import "./styles.css";

const CityImage = () => {
  const { selectedCity } = useUserContext();
  return (
    <div id="city-image">
      {selectedCity ? (
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${
            selectedCity?.photos[0]?.photo_reference
          }&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`}
        />
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default CityImage;
