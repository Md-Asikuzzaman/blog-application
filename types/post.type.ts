interface PostType {
  id: string;
  title: string;
  description: string;
  image: string;
  author: AuthorType;
  category: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthorType {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
