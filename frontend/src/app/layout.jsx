import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
