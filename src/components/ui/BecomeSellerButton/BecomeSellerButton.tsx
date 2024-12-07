interface BecomeSellerButtonProps {
  mobile?: boolean;
}

export const BecomeSellerButton = ({ mobile }: BecomeSellerButtonProps) => (
  <button
    className={`rounded-[10px] bg-[#98C6B7] ${
      mobile ? "h-[40px] text-sm w-full" : "h-[80px] text-base"
    } text-white  font-semibold whitespace-nowrap`}
  >
    Become a Seller
  </button>
);
