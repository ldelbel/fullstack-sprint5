import { ICategoriesState } from "../types/interfaces";
import ServiceUtils from "./ServiceUtils";

const CategoriesService = {
  get(): Promise<ICategoriesState> {
    const url = "/data/categories.json";
    return ServiceUtils.handleResponse(fetch(url));
  },
};

export default CategoriesService;
