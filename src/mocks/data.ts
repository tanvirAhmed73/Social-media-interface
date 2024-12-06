import { Artist, FeaturedItem, Post } from "../types/interfaces";

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Lara Leones",
      username: "@theartlara",
      avatar: "/src/assets/images/pexels-ali-pazani-2613260@2x.png",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/src/assets/images/pexels-humphrey-muleba-2045248@2x.png",
    likes: 9800,
    comments: 8600,
    shares: 7200,
  },
  {
    id: 2,
    author: {
      name: "Thomas J.",
      username: "@thecustomcreater",
      avatar: "/src/assets/images/pexels-imad-clicks-9810659@2x.png",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of",
    image: "/src/assets/images/pexels-tobias-bjørkli-2236382@2x.png",
    likes: 5400,
    comments: 3200,
    shares: 1800,
  },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "Urban Art Collection",
    image: "/src/assets/images/Image 40@2x.png",
    price: 299.99,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Street Photography",
    image: "/src/assets/images/Image 39@2x.png",
    price: 199.99,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Digital Art Prints",
    image: "/src/assets/images/pexels-ekaterina-12203460.png",
    price: 149.99,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Abstract Collection",
    image: "/src/assets/images/pexels-steve-johnson-1269968.png",
    price: 249.99,
    rating: 4.6,
  },
  {
    id: 5,
    title: "Abstract Collection",
    image: "/src/assets/images/pexels-steve-johnson-1269968.png",
    price: 249.99,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Abstract Collection",
    image: "/src/assets/images/pexels-steve-johnson-1269968.png",
    price: 249.99,
    rating: 4.6,
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: "Thomas Edward",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-anastasia-shuraeva-4406721-1@2x.png",
    coverImage: "/src/assets/images/pexels-ekaterina-12203460@2x.png",
  },
  {
    id: 2,
    name: "Chris Doe",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-andrea-piacquadio-3771118@2x.png",
    coverImage: "/src/assets/images/pexels-genaro-servín-763210@2x.png",
  },
  {
    id: 3,
    name: "Emilia Jones",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-antoni-shkraba-4442102@2x.png",
    coverImage: "/src/assets/images/pexels-pixabay-164455-1@2x.png",
  },
  {
    id: 4,
    name: "Jessica Williams",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-antoni-shkraba-4442005@2x.png",
    coverImage: "/src/assets/images/pexels-steve-johnson-1269968.png",
  },
  {
    id: 5,
    name: "Tanzin Williams",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-antoni-shkraba-4442102@2x.png",
    coverImage: "/src/assets/images/pexels-fiona-art-5022849@2x.png",
  },
  {
    id: 6,
    name: "Tanvir Ahmed",
    username: "@thewildwithyou",
    avatar: "/src/assets/images/pexels-anastasia-shuraeva-4406721-1@2x.png",
    coverImage: "/src/assets/images/pexels-fiona-art-5022849@2x.png",
  },
];
