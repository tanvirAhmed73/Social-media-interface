import { useState } from "react";
import { posts } from "../../../mocks/data";
import FeaturedItems from "../FeaturedItem/FeaturedItem";
import PostCard from "./PostCard";

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
    <div className="w-full max-w-full lg:max-w-none">
      <div className="space-y-[30px]">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isExpanded={expandedPosts.includes(post.id)}
            onToggleReadMore={toggleReadMore}
            formatNumber={formatNumber}
          />
        ))}
      </div>
      <div className="mt-[30px] lg:mt-0">
        <FeaturedItems />
      </div>
    </div>
  );
};

export default MainContent;
