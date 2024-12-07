interface PostAuthorProps {
  avatar: string;
  name: string;
  username: string;
}

export const PostAuthor = ({ avatar, name, username }: PostAuthorProps) => (
  <div className="flex items-center gap-3">
    <img src={avatar} alt="" className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg" />
    <div>
      <h3 className="font-semibold text-[13px] lg:text-[15px] text-black">
        {name}
      </h3>
      <p className="text-[11px] lg:text-[13px] text-gray-500">{username}</p>
    </div>
  </div>
);
