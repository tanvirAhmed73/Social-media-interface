interface PostContentProps {
  content: string;
  isExpanded: boolean;
  onToggleReadMore: () => void;
}

export const PostContent = ({
  content,
  isExpanded,
  onToggleReadMore,
}: PostContentProps) => (
  <div className="mt-4">
    <p
      className={`text-[13px] lg:text-[15px] text-black ${
        !isExpanded && "line-clamp-2"
      }`}
    >
      {content}
    </p>
    <button
      className="text-[13px] text-pink-500 font-semibold mt-1"
      onClick={onToggleReadMore}
    >
      {isExpanded ? "Show less" : "Read more"}
    </button>
  </div>
);
