import type { Comment } from "@/types";
import BaseApi from "./_BaseApi";

export default class AccountApi {
  baseApi() {
    return new BaseApi();
  }

  async deleteComment(id: number): Promise<void> {
    await this.baseApi().axios.delete(
      this.baseApi().base + `/comments/${id}`,
      {}
    );
  }

  async deleteCommentsByChannel(channelId: number): Promise<void> {
    await this.baseApi().axios.delete(
      this.baseApi().base + `/channels/${channelId}/comments`,
      {}
    );
  }

  async getComment(id: number): Promise<Comment> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/comments/${id}`,
      {}
    );
    return response.data;
  }

  async getCommentsByChannel(channelId: number): Promise<Comment[]> {
    const response = await this.baseApi().axios.get(
      this.baseApi().base + `/channels/${channelId}/comments`,
      {}
    );
    return response.data;
  }

  async createComment(postId: number, comment: Comment): Promise<Comment> {
    const response = await this.baseApi().axios.post(
      this.baseApi().base + `/posts/${postId}/comments`,
      { ...comment },
      {}
    );
    return response.data;
  }

  async updateComment(id: number, comment: Comment): Promise<Comment> {
    const response = await this.baseApi().axios.put(
      this.baseApi().base + `/comments/${id}`,
      { ...comment },
      {}
    );
    return response.data;
  }
}
