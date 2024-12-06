import { Search, SlidersHorizontal } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex flex-1 bg-white w-[620px] h-[80px] rounded-[10px] items-center justify-between px-[36px]">
      <div className="relative flex-1">
        <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-8 text-base text-black focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 text-black">
        <SlidersHorizontal className="h-4 w-4" />
        <span className="text-sm">Filters</span>
      </div>
    </div>
  );
};
