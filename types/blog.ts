export type Blog = {
    id: string;
    content: string;
    title: string;
    // tags: Tag[];
    eyecatch: {
      url: string
      height: number
      width: number
    };
    // eyecatch: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };