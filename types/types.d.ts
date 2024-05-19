interface ApiPostType {
  id: string;
  title: string;
  description: string;
  image: string;
  authorId?: string | null;
  categoriesId?: string[];
  tagsId?: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface ClientPostType {
  id: string;
  title: string;
  description: string;
  image: string;
  author: AuthorType | null;
  // tags: TagType[];
  categories: CategoryType[];
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
  postId: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryType {
  id: string;
  title: string;
  postId: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}
