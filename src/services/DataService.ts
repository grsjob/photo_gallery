import { IPhotos } from "../types/photosList";
import axios from "axios";
import settings from "../config/settings";

axios.defaults.baseURL = settings.baseApiUrl;

export default class DataService {
  static async fetchData(page: number, limit: number): Promise<IPhotos[]> {
    const { data } = await axios.get<IPhotos[]>(`?page=${page}&limit=${limit}`);
    return data;
  }
}
