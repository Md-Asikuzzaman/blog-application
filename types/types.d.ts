interface ApiPostType {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  author: AuthorType | null;
  categories: CategoryType[];
  tags: TagType[];
}

interface ClientPostType {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  author: AuthorType | null;
  // tags: TagType[];
  categories: CategoryType[];
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
  postIDs: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryType {
  id: string;
  title: string;
  postIDs: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}
