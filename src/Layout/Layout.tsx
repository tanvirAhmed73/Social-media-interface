import Home from "../Pages/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
