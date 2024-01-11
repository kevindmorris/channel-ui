import type { Post } from "@/types";
import BaseApi from "./_BaseApi";

export default class AccountApi {
  baseApi() {
    return new BaseApi();
  }

  async deletePost(id: number): Promise<void> {
    await this.baseApi().axios.delete(this.baseApi().base + `/posts/${id}`, {});
  }

  async deletePostsByChannel(channelId: number): Promise<void> {
    await this.baseApi().axios.delete(
      this.baseApi().base + `/channels/${channelId}/posts`,
      {}
    );
  }

  async getPost(id: number): Promise<Post> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/posts/${id}`,
      {}
    );
    return response.data;
  }

  async getPostsByChannel(channelId: number): Promise<Post[]> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/channels/${channelId}/posts`,
      {}
    );
    return response.data;
  }

  async createPost(channelId: number, post: Post): Promise<Post> {
    const response = await this.baseApi().axios.post(
      this.baseApi().base + `/channels/${channelId}/posts`,
      { ...post },
      {}
    );
    return response.data;
  }

  async updatePost(id: number, post: Post): Promise<Post> {
    const response = await this.baseApi().axios.put(
      this.baseApi().base + `/posts/${id}`,
      { ...post },
      {}
    );
    return response.data;
  }
}
