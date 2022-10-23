// src/types/blog.ts

export type Blog = {
  id: string;
  body: string;
  title: string;
  image: {
    url: string,
    height: number,
    width: number,
  };
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
