import type { Channel } from "@/types";
import BaseApi from "./_BaseApi";

export default class AccountApi {
  baseApi() {
    return new BaseApi();
  }

  async deleteChannel(id: number): Promise<void> {
    await this.baseApi().axios.delete(
      this.baseApi().base + `/channels/${id}`,
      {}
    );
  }

  async getChannel(id: number): Promise<Channel> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/channels/${id}`,
      {}
    );
    return response.data;
  }

  async getChannels(): Promise<Channel[]> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/channels`,
      {}
    );
    return response.data;
  }

  async createChannel(channel: Channel): Promise<Channel> {
    const response = await this.baseApi().axios.post(
      this.baseApi().base + `/channels`,
      { ...channel },
      {}
    );
    return response.data;
  }

  async updateChannel(id: number, channel: Channel): Promise<Channel> {
    const response = await this.baseApi().axios.put(
      this.baseApi().base + `/channels/${id}`,
      { ...channel },
      {}
    );
    return response.data;
  }
}
