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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const LeftSidebar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext)
    throw new Error("AuthContext must be used within AuthProvider");
  const { logOut } = authContext;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <div className="flex h-[600px] rounded-[10px] flex-col bg-white w-[260px] py-8">
        <nav className="pt-[20px] text-left flex flex-1 flex-col">
          <div className="space-y-[15px]">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Bell, label: "Notifications" },
              { icon: ShoppingBag, label: "Shop" },
              { icon: MessageCircle, label: "Conversation" },
              { icon: Wallet, label: "Wallet" },
              { icon: Bookmark, label: "Subscription" },
              { icon: User, label: "My Profile" },
              { icon: Settings, label: "Settings" },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 pl-[36px] py-2 text-sm cursor-pointer transition-colors ${
                  item.active
                    ? "border-l-2 border-blue-500 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => console.log(`Clicked ${item.label}`)}
              >
                <item.icon
                  className={`h-5 w-5 ${item.active ? "text-blue-600" : ""}`}
                />
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 pl-[36px] py-2 text-sm text-[#88C2BB] hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </div>
        </nav>
      </div>
      <div className="flex justify-between items-center text-xs mt-5 w-[260px] text-gray-500">
        <p>2022©logo name</p>
        <p>Developed by ivan Infotech</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
