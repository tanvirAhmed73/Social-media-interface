import { Artist } from "../../../../types/interfaces";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard = ({ artist }: ArtistCardProps) => (
  <div className="flex-shrink-0 w-[200px] lg:w-auto relative h-[100px] overflow-hidden rounded-xl">
    <img
      src={artist.coverImage}
      alt=""
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40">
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="relative">
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
          <img
            src={artist.avatar}
            alt=""
            className="h-8 w-8 rounded-xl border-2 border-white"
          />
        </div>
        <div className="text-white">
          <p className="text-sm font-medium">{artist.name}</p>
          <p className="text-xs opacity-80">{artist.username}</p>
        </div>
      </div>
    </div>
  </div>
);
