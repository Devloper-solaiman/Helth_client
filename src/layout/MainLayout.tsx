import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Container from "@/components/ui/Container";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <div className="sticky top-0 z-50 ">
          <Navbar />
        </div>

        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
