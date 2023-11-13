import axios from "axios";
import AirQualityUTDTypes from "types/AirQualityUTDTypes";

const apiClient = axios.create({
  baseURL: "https://api.nilu.no/aq",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get<AirQualityUTDTypes[]>("/utd/");
  return response.data;
}

// filter and findAll
const findBySearchQuery = async (query: string) => {
  const response = await apiClient.get<AirQualityUTDTypes[]>(`/utd/?${query}`);
  return response.data;
}

const AirQualityIndexService = {
  findAll,
  findBySearchQuery
}

export default AirQualityIndexService;