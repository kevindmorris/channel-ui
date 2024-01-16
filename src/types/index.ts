export type Channel = {
  id: string;
  content: string;
  createdDate: string;
  updatedDate: string;
  posts: Post[];
  numPosts?: number;
};

export type Post = {
  id: string;
  content: string;
  createdDate: string;
  updatedDate: string;
  channel: Channel;
  comments: Comment[];
  numComments?: number;
};

export type Comment = {
  id: string;
  content: string;
  createdDate: string;
  updatedDate: string;
  post: Post;
};
