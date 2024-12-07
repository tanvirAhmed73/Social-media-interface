import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => (
  <button onClick={onClick} className="p-2 hover:bg-gray-100 rounded-lg">
    <Menu className="h-6 w-6" />
  </button>
);
