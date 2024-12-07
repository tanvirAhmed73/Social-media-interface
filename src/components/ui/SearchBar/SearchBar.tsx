import { Search, SlidersHorizontal } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex flex-1 bg-white w-full h-[50px] lg:h-[80px] rounded-[10px] items-center justify-between px-4 lg:px-[36px] min-w-0">
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-8 text-base text-black focus:outline-none truncate"
        />
      </div>
      <div className="flex items-center gap-2 text-black ml-2">
        <SlidersHorizontal className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm whitespace-nowrap">Filters</span>
      </div>
    </div>
  );
};
