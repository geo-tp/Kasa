import { data } from "./data";

export class Routes {
  static getHouses = () => {
    return data;
  };

  static getHouseById = (id) => {
    return data.find((x) => x.id === id);
  };
}
