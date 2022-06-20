import { ICharacters } from "../types/characters";
import axios from "axios";
import settings from "../config/settings";

axios.defaults.baseURL = settings.baseApiUrl;

export default class DataService {
  static async fetchData(): Promise<ICharacters[]> {
    const { data } = await axios.get<ICharacters[]>(`/characters`);
    return data;
  }
}
