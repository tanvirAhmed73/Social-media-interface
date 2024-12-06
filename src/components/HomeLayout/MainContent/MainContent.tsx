import { Heart, MessageCircleMore, MoreVertical, Share2 } from "lucide-react";
import { useState } from "react";
import { posts } from "../../../mocks/data";
import FeaturedItems from "../FeaturedItem/FeaturedItem";

const MainContent = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  const toggleReadMore = (postId: number) => {
    setExpandedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="w-[620px]">
      <div className="space-y-[30px]">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-[10px] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt=""
                  className="h-10 w-10 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-[15px] text-black">
                    {post.author.name}
                  </h3>
                  <p className="text-[13px] text-gray-500">
                    {post.author.username}
                  </p>
                </div>
              </div>
              <button>
                <MoreVertical className="h-5 w-5 text-black" />
              </button>
            </div>

            <div className="mt-4">
              <p
                className={`text-[15px] text-black ${
                  !expandedPosts.includes(post.id) && "line-clamp-2"
                }`}
              >
                {post.content}
              </p>
              <button
                className="text-[13px] text-pink-500 font-semibold mt-1"
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPosts.includes(post.id) ? "Show less" : "Read more"}
              </button>
            </div>

            <div className="relative mt-4">
              <button className="absolute right-3 top-3 z-10">
                <Heart className="h-5 w-5 text-white hover:text-red-500 hover:fill-red-500 transition-colors" />
              </button>
              <img
                src={post.image}
                alt=""
                className="w-full h-[300px] object-cover rounded-[10px]"
              />
            </div>

            <div className="mt-4 flex items-center gap-6">
              <button className="flex items-center gap-2 text-[15px] text-black group">
                <Heart className="h-[18px] w-[18px] group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                {formatNumber(post.likes)}
              </button>
              <button className="flex items-center gap-2 text-[15px] text-black">
                <MessageCircleMore className="h-[18px] w-[18px]" />
                {formatNumber(post.comments)}
              </button>
              <button className="flex items-center gap-2 text-[15px] text-black">
                <Share2 className="h-[18px] w-[18px]" />
                {formatNumber(post.shares)}
              </button>
            </div>
          </div>
        ))}
      </div>
      <FeaturedItems />
    </div>
  );
};

export default MainContent;
