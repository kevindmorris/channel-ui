export type Channel = {
  id: number;
  content: string;
  createdDate: string;
  updatedDate: string;
  posts?: Post[];
  numPosts?: number;
};

export type Post = {
  id: number;
  content: string;
  createdDate: string;
  updatedDate: string;
  channel: Channel;
  comments?: Comment[];
  numComments?: number;
};

export type Comment = {
  id: number;
  content: string;
  createdDate: string;
  updatedDate: string;
  post: Post;
};
