import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId, lat, lng) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lat && lng) {
      fetchData();
    }
  }, [lat, lng]);

  const fetchData = async () => {
    try {
      const url =
        RESTAURANT_MENU_API.replace("{lat}", lat).replace("{lng}", lng) + resId;
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return { resInfo, error };
};

export default useRestaurantMenu;
