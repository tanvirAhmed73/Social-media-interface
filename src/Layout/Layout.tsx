import Home from "../Pages/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
    </div>
  );
};

export default Layout;
