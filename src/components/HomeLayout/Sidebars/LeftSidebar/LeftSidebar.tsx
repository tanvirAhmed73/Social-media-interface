import {
  Bell,
  Bookmark,
  Home,
  LogOut,
  MessageCircle,
  Settings,
  ShoppingBag,
  User,
  Wallet,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Footer } from "./Footer";
import { MenuItem } from "./MenuItem";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Bell, label: "Notifications" },
  { icon: ShoppingBag, label: "Shop" },
  { icon: MessageCircle, label: "Conversation" },
  { icon: Wallet, label: "Wallet" },
  { icon: Bookmark, label: "Subscription" },
  { icon: User, label: "My Profile" },
  { icon: Settings, label: "Settings" },
];

const LeftSidebar = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("AuthContext must be used within AuthProvider");
  const { logOut } = authContext;

  return (
    <div>
      <div className="bg-white rounded-[10px] h-[600px]">
        <nav className="h-full flex flex-col py-8">
          <div className="space-y-[15px]">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                Icon={item.icon}
                label={item.label}
                active={item.active}
              />
            ))}
          </div>

          <div className="mt-auto">
            <button
              onClick={logOut}
              className="flex w-full items-center gap-3 pl-[36px] py-2 text-sm text-[#88C2BB] hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </div>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default LeftSidebar;
