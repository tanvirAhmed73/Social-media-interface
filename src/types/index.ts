interface Author {
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  author: Author;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

export interface Artist {
  id: number;
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
}
