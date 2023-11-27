import { AxiosResponse } from "axios";
import axios from "axios";

class PlacesService {
  public static getInstance() {
    if (!this.instance) {
      this.instance = new PlacesService();
    }

    return this.instance;
  }

  private static instance: PlacesService;

  public async getPlaces(query: string) {
    return axios
      .get<AxiosResponse>(`http://localhost:4000/api/place/textsearch`, {
        params: {
          query,
          key: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
        },
      })
      .then((res) => res.data);
  }

  public async getPlacePhoto(place: string) {
    return axios
      .get<AxiosResponse>(
        `https://api.teleport.org/api/urban_areas/slug:${place}/images/`
      )
      .then((res) => res.data);
  }
}

export default PlacesService;
