import { LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../constants";
import { Logo } from "./Logo";
import { MobileMenuFooter } from "./MobileMenuFooter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const MobileMenu = ({ isOpen, onClose, onLogout }: MobileMenuProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleMenuClick = (path: string) => {
    navigate(path.toLowerCase());
    onClose();
  };

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="bg-white w-64 h-full p-4 transform transition-transform duration-300">
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                item.active
                  ? "bg-[#98C6B7] bg-opacity-10 text-[#98C6B7]"
                  : "text-[#98C6B7] hover:bg-gray-50"
              }`}
              onClick={() => handleMenuClick(`/${item.label}`)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-[#98C6B7] hover:bg-gray-50 rounded-lg mt-4"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </button>

        <MobileMenuFooter />
      </div>
    </div>
  );
};
