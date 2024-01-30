import BaseApi from "./_BaseApi";

export default class AuthApi {
  baseApi() {
    return new BaseApi();
  }

  async getUser(): Promise<void> {
    await this.baseApi().axios.get(this.baseApi().base + `/user`, {});
  }
}
