import MainContent from "../../components/HomeLayout/MainContent/MainContent";
import LeftSidebar from "../../components/HomeLayout/Sidebars/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/HomeLayout/Sidebars/RightSidebar/RightSidebar";

export default function SocialMediaLayout() {
  return (
    <div className="mt-8">
      {/* Artists Section for Mobile */}
      <div className="mb-6 lg:hidden">
        <RightSidebar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-4 lg:gap-7">
        {/* Left Sidebar */}
        <aside className="hidden lg:block">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full min-w-0">
          <MainContent />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
