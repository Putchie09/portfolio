import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomScrollbar from "../components/CustomScrollbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background font-sans text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#10153a]"
      >
        Skip to content
      </a>

      <div>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </div>
      <CustomScrollbar />
    </div>
  );
}

export default MainLayout;
