import { Heart } from "lucide-react";

interface PostImageProps {
  image: string;
}
export const PostImage = ({ image }: PostImageProps) => (
  <div className="relative mt-4">
    <button className="absolute right-3 top-3 z-10">
      <Heart className="h-4 w-4 lg:h-5 lg:w-5 text-white hover:text-red-500 hover:fill-red-500 transition-colors" />
    </button>
    <img
      src={image}
      alt=""
      className="w-full h-[200px] lg:h-[300px] object-cover rounded-[10px]"
    />
  </div>
);
