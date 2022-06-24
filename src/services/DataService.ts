import { IPhotos } from "../types/photosList";
import axios from "axios";
import settings from "../config/settings";

axios.defaults.baseURL = settings.baseApiUrl;

export default class DataService {
  static async fetchData(limit: number): Promise<IPhotos[]> {
    const { data } = await axios.get<IPhotos[]>(`v2/list?limit=${limit}`);
    return data;
  }
}
