import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-gray-200 flex flex-col">
      <Navbar />

      {/* IMPORTANT: no py here */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
