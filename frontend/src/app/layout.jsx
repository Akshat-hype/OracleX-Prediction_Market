import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-gray-200 flex flex-col">
      <Navbar />

      <main
        className="
          flex-1
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
