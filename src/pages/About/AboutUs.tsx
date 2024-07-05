import OurVolunteer from "@/components/AboutUs/OurVolunteer";
import Gallery from "@/components/homeComponent/Gallary";
import NewsLetter from "@/components/homeComponent/NewsLetter";
import OurMission from "@/components/homeComponent/OurMission";
import SectionAboutUs from "@/components/homeComponent/SectionAboutUs";
import Testimonials from "@/components/homeComponent/Testimonials";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";

const AboutUs = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` min-h-screen w-full ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <ScrollToTop />
        <SectionAboutUs />
        <OurVolunteer />
        <Gallery />
        <OurMission />
        <Testimonials />
        <NewsLetter />
      </div>
    </div>
  );
};

export default AboutUs;
