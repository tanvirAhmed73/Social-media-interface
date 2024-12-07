import { useState } from "react";
import { artists } from "../../../../mocks/data";

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState<"artists" | "photographers">(
    "artists"
  );

  return (
    <div className="w-full">
      <div className="w-full  rounded-[10px] lg:h-[600px]">
        <div className="flex gap-4 px-4">
          <button
            className={`pb-4 text-sm font-medium ${
              activeTab === "artists"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("artists")}
          >
            Artists
          </button>
          <button
            className={`pb-4 text-sm font-medium ${
              activeTab === "photographers"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("photographers")}
          >
            Photographers
          </button>
        </div>

        <div className="overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto lg:h-[500px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-400">
          <div className="flex lg:flex-col gap-4 px-4 py-6 min-w-min">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="flex-shrink-0 w-[200px] lg:w-auto relative h-[100px] overflow-hidden rounded-xl"
              >
                <img
                  src={artist.coverImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
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
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-around mt-3 text-xs text-gray-500">
          <p>Privacy</p>
          <p>Terms of Service</p>
          <p>Cookie Notice</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
