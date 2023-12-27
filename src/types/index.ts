type Base = {
  id: number;
  createdDate?: string;
  updatedDate?: string;
  content: string;
};

export type Channel = Base & {
  posts?: Post[];
  numPosts: number;
};

export type Post = Base & {
  channel: Channel;
  comments?: Comment[];
  numComments: number;
};

export type Comment = Base & {
  post?: Post;
};
