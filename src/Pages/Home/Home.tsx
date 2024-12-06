import MainContent from "../../components/HomeLayout/MainContent/MainContent";
import LeftSidebar from "../../components/HomeLayout/Sidebars/LeftSidebar";
import RightSidebar from "../../components/HomeLayout/Sidebars/RightSidebar";

export default function SocialMediaLayout() {
  return (
    <div className="w-full mt-8">
      <div className="mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-[260px_620px_260px] gap-7">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content */}
          <MainContent />

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
