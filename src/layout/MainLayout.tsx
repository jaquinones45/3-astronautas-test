import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import '../app/globals.css'

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="mainContent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;