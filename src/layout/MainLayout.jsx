import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomScrollbar from "../components/CustomScrollbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CustomScrollbar />
    </div>
  );
}

export default MainLayout;
