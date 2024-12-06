import type { Artist, Post } from "./types";

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Lara Leones",
      username: "@theartlara",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/placeholder.svg?height=300&width=600",
    likes: 9800,
    comments: 8600,
    shares: 7200,
  },
  {
    id: 2,
    author: {
      name: "Thomas J.",
      username: "@thecustomcreater",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of",
    image: "/placeholder.svg?height=300&width=600",
    likes: 5400,
    comments: 3200,
    shares: 1800,
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Thomas Edward",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "Chris Doe",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "Emilia Jones",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "Jessica Williams",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "Thomas Edward",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    name: "Thomas Edward",
    username: "@thewildwithyou",
    avatar: "/placeholder.svg?height=40&width=40",
    coverImage: "/placeholder.svg?height=100&width=200",
  },
];
