interface PostType {
  id: string;
  title: string;
  description: string;
  image: string;
  author: AuthorType;
  category: CategoryType[];
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthorType {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TagType {
  id: string;
  title: string;
  postId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryType {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
