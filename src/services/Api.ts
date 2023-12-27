import { Channel, Comment, Post } from "@/types";
import axios, { Axios } from "axios";

export default class Api {
  axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:5000",
    });
  }

  async getChannels(): Promise<Channel[]> {
    const response = await this.axios.get(`/channels`);
    return response.data;
  }

  async getChannel(channelId: number): Promise<Channel> {
    const response = await this.axios.get(`/channels/${channelId}`);
    return response.data;
  }

  async getPost(channelId: number, postId: number): Promise<Post> {
    const response = await this.axios.get(
      `/channels/${channelId}/posts/${postId}`
    );
    return response.data;
  }

  async getComment(
    channelId: number,
    postId: number,
    commentId: number
  ): Promise<Comment> {
    const response = await this.axios.get(
      `/channels/${channelId}/posts/${postId}/comments/${commentId}`
    );
    return response.data;
  }

  async createChannel(content: string): Promise<Channel> {
    const response = await this.axios.post(
      `/channels`,
      { content: content },
      {}
    );
    return response.data;
  }

  async createPost(channelId: number, content: string): Promise<Post> {
    const response = await this.axios.post(
      `/channels/${channelId}/posts`,
      { content: content },
      {}
    );
    return response.data;
  }

  async createComment(
    channelId: number,
    postId: number,
    content: string
  ): Promise<Comment> {
    const response = await this.axios.post(
      `/channels/${channelId}/posts/${postId}/comments`,
      { content: content },
      {}
    );
    return response.data;
  }

  async deleteChannel(channelId: number): Promise<void> {
    await this.axios.delete(`/channels/${channelId}`, {});
  }
  async deletePost(channelId: number, postId: number): Promise<void> {
    await this.axios.delete(`/channels/${channelId}/posts/${postId}`, {});
  }
  async deleteComment(
    channelId: number,
    postId: number,
    commentId: number
  ): Promise<void> {
    await this.axios.delete(
      `/channels/${channelId}/posts/${postId}/comments/${commentId}`,
      {}
    );
  }
}
