import { Heart, MessageCircleMore, Share2 } from "lucide-react";
interface PostEngagementProps {
  likes: number;
  comments: number;
  shares: number;
  formatNumber: (num: number) => string | number;
}

export const PostEngagement = ({
  likes,
  comments,
  shares,
  formatNumber,
}: PostEngagementProps) => (
  <div className="flex items-center gap-4 lg:gap-6">
    <button className="flex items-center gap-2 text-[15px] text-black group">
      <Heart className="h-[18px] w-[18px] group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
      {formatNumber(likes)}
    </button>
    <button className="flex items-center gap-2 text-[15px] text-black">
      <MessageCircleMore className="h-[18px] w-[18px]" />
      {formatNumber(comments)}
    </button>
    <button className="flex items-center gap-2 text-[15px] text-black">
      <Share2 className="h-[18px] w-[18px]" />
      {formatNumber(shares)}
    </button>
  </div>
);
