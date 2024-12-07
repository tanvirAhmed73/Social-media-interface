import { MoreVertical } from "lucide-react";
import { PostCardProps } from "../../../types/interfaces";
import { PostAuthor } from "./Post/PostAuthor";
import { PostContent } from "./Post/PostContent";
import { PostEngagement } from "./Post/PostEngagement";
import { PostImage } from "./Post/PostImage";

const PostCard = ({
  post,
  isExpanded,
  onToggleReadMore,
  formatNumber,
}: PostCardProps) => {
  return (
    <div className="bg-white rounded-[10px] p-4">
      <div className="flex items-center justify-between">
        <PostAuthor
          avatar={post.author.avatar}
          name={post.author.name}
          username={post.author.username}
        />
        <button>
          <MoreVertical className="h-5 w-5 text-black" />
        </button>
      </div>

      <PostContent
        content={post.content}
        isExpanded={isExpanded}
        onToggleReadMore={() => onToggleReadMore(post.id)}
      />

      <PostImage image={post.image} />

      <div className="border-t border-gray-100 my-4" />

      <PostEngagement
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
        formatNumber={formatNumber}
      />
    </div>
  );
};

export default PostCard;
