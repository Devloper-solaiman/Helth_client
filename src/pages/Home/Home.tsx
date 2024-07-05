import Banner from "@/components/homeComponent/Banner";
import Gallery from "@/components/homeComponent/Gallary";
import Contact from "@/components/homeComponent/Contact";
import NewsLetter from "@/components/homeComponent/NewsLetter";
import SectionAboutUs from "@/components/homeComponent/SectionAboutUs";
import Testimonials from "@/components/homeComponent/Testimonials";
import TopDonations from "@/components/homeComponent/TopDonations";
import TopSubscription from "@/components/homeComponent/TopSubscription";
import ScrollToTop from "@/hooks/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <TopDonations />
      <SectionAboutUs />
      <TopSubscription />
      <Gallery />
      <Contact />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
