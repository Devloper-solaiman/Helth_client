import galleyImg1 from "../../assets/gallary-1.png";
import galleyImg2 from "../../assets/gallary-2.png";
import galleyImg3 from "../../assets/gallary-3.png";
import galleyImg4 from "../../assets/gallary-4.png";
import galleyImg5 from "../../assets/gallary-5.png";
import galleyImg6 from "../../assets/gallary-6.png";
import galleyImg7 from "../../assets/gallary-7.png";
import galleyImg8 from "../../assets/gallary-8.png";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import AnimatedUnderLine from "../ui/AnimatedUnderLine";
import { useAppSelector } from "@/redux/hooks";

const Gallery = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="py-20  bg-slate-100 dark:bg-zinc-950">
        <div className="text-center mb-20">
          <h4 className="text-primary dark:text-white text-2xl font-bold mb-3">
            GALLERY
          </h4>

          <AnimatedUnderLine className="mx-auto bg-indigo-600" />
        </div>
        <motion.div
          ref={view}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { duration: 1 } }
              : { opacity: 0, y: 150, transition: { duration: 1 } }
          }
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-[95%] text-white"
          >
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg5} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg6} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg7} alt="" />
            </SwiperSlide>
            <SwiperSlide className="mb-20">
              <img className="h-52" src={galleyImg8} alt="" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
