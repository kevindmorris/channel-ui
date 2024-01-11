export type Channel = {
  id: string;
  content: string;
  posts: Post[];
  numPosts?: number;
};

export type Post = {
  id: string;
  content: string;
  channel: Channel;
  comments: Comment[];
  numComments?: number;
};

export type Comment = {
  id: string;
  content: string;
  post: Post;
};
