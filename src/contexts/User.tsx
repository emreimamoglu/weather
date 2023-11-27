import { createContext, useState, useContext, useMemo, ReactNode } from "react";

export type CreateUserContextProps = {
  selectedCity: any;
  favoriteCities: string[];
  selectedCityWeather: any;
  setSelectedCity: React.Dispatch<React.SetStateAction<null>>;
  setFavoriteCities: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCityWeather: React.Dispatch<React.SetStateAction<null>>;
  loadingCity: boolean;
  loadingWeather: boolean;
  setLoadingCity: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingWeather: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserContextProps = {
  children?: ReactNode;
};

const UserContext = createContext<CreateUserContextProps | null>(null);

export function UserContextProvider({ children }: UserContextProps) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityWeather, setSelectedCityWeather] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState<string[]>([]);
  const [loadingCity, setLoadingCity] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);

  const contextValue = useMemo(
    () => ({
      selectedCity,
      favoriteCities,
      setSelectedCity,
      setFavoriteCities,
      selectedCityWeather,
      setSelectedCityWeather,
      loadingCity,
      loadingWeather,
      setLoadingCity,
      setLoadingWeather,
    }),
    [
      selectedCity,
      favoriteCities,
      selectedCityWeather,
      loadingCity,
      loadingWeather,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => {
  const contextValue = useContext(UserContext);

  if (!contextValue) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return contextValue;
};
