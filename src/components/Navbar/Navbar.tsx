"use client";

import { SearchBar } from "../ui/SearchBar/SearchBar";

export const Navbar = () => {
  return (
    <div className=" top-0 z-50 w-full bg-[#F5F5F5]">
      <div className="mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-[260px_620px_260px] gap-7">
          {/* Logo */}
          <div className="bg-white flex-shrink-0 h-[80px] rounded-[10px]">
            <a
              href="/"
              className="font-baiti font-normal text-[32px] leading-[44px] block pt-[27px] pb-[19px] pl-[35px] pr-[136px]"
            >
              LOGO
            </a>
          </div>

          {/* Search */}
          <SearchBar />

          {/* Right buttons */}
          <button className="rounded-[10px] bg-[#98C6B7] h-[80px] text-white">
            Become a Seller
          </button>
        </div>
      </div>
    </div>
  );
};
