import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  Icon: LucideIcon;
  label: string;
  active?: boolean;
}

export const MenuItem = ({ Icon, label, active }: MenuItemProps) => (
  <button
    className={`flex w-full items-center gap-3 pl-[36px] py-2 text-sm cursor-pointer transition-colors ${
      active
        ? "border-l-2 border-blue-500 text-blue-600"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`}
  >
    <Icon className="h-5 w-5" />
    {label}
  </button>
);
