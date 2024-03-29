import { Axios } from "../Axios";

export default class _BaseApi {
  axios: Axios;
  base: string;

  constructor() {
    this.axios = new Axios();
    this.base = "http://localhost:5000";
  }
}
