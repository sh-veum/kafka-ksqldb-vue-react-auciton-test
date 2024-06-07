import { LocationService } from "@/services/locationService";
import { defineStore } from "pinia";
import { ref } from "vue";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useLocationStore = defineStore("userLocation", () => {
  const usersOnPage = ref<string[]>([]);

  const locationService = new LocationService(baseUrl);

  const getUsersOnPage = async (page: string) => {
    const { data, loading, error } = await locationService.getUsersOnPage(page);
    if (data) {
      console.log("Data", data);
      usersOnPage.value = data;
      console.log("Users on page", usersOnPage.value);
    }
    return { loading, error };
  };

  return {
    usersOnPage,
    getUsersOnPage,
    addLocation: locationService.addLocation.bind(locationService),
    removeLocation: locationService.removeLocation.bind(locationService),
  };
});