import Comments from "@/components/community/Comments";
import RecentPostCard from "@/components/community/RecentPostCard";
import ScrollToTop from "@/hooks/ScrollToTop";
import { useAppSelector } from "@/redux/hooks";

import recentPostImage01 from "../../assets/gallary-1.png";
import recentPostImage02 from "../../assets/gallary-2.png";
import recentPostImage03 from "../../assets/gallary-3.png";
import recentPostImage04 from "../../assets/gallary-4.png";
import recentPostImage05 from "../../assets/gallary-5.png";
import recentPostImage06 from "../../assets/gallary-6.png";
import recentPostImage07 from "../../assets/gallary-7.png";
import recentPostImage08 from "../../assets/gallary-8.png";

const Community = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <div className={` min-h-screen w-[90%] dark:text-white dark:bg-gray-800`}>
        <ScrollToTop />
        <div className="py-20 w-full mx-auto ">
          <h1 className="text-xl text-center md:text-3xl text-primary mb-5 dark:text-white font-bold">
            ALL Posts
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <RecentPostCard
                image={recentPostImage01}
                title={"Donate, Transform Lives"}
              />
              <RecentPostCard
                image={recentPostImage02}
                title={"Water for All"}
              />
              <RecentPostCard
                image={recentPostImage03}
                title={"Give Clean Water"}
              />
              <RecentPostCard
                image={recentPostImage04}
                title={"Drops of Hope"}
              />
            </div>
            <div>
              <RecentPostCard
                image={recentPostImage05}
                title={"Make Waves, Donate"}
              />
              <RecentPostCard
                image={recentPostImage06}
                title={"Donate, Save Lives"}
              />
              <RecentPostCard
                image={recentPostImage07}
                title={"Nourish with Love"}
              />
              <RecentPostCard
                image={recentPostImage08}
                title={"Share, Support, Sustain"}
              />
            </div>
          </div>

          <div>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
