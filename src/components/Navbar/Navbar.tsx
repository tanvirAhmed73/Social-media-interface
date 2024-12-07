import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BecomeSellerButton } from "../ui/BecomeSellerButton/BecomeSellerButton";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { Logo } from "./components/Logo";
import { MobileMenu } from "./components/MobileMenu";
import { MobileMenuButton } from "./components/MobileMenuButton";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

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
    <div className="w-full">
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between py-4 lg:hidden">
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
        <Logo className="text-2xl" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[260px_1fr_260px] xl:grid-cols-[260px_620px_260px] gap-4 lg:gap-7">
        <div className="bg-white flex-shrink-0 h-[80px] rounded-[10px]">
          <Logo className="pt-[27px] pb-[19px] pl-[35px] pr-[136px]" />
        </div>

        <div className="min-w-0">
          <SearchBar />
        </div>

        <BecomeSellerButton />
      </div>

      {/* Mobile Search and Button */}
      <div className="space-y-4 pb-4 lg:hidden">
        <SearchBar />
        <BecomeSellerButton mobile />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};
