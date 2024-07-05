import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const siderItems = [
    <ul key="sidebar-list" className="grid ">
      <Button className="mb-5 h-6 mt-10 bg-primary text-white">
        <NavLink to="/admin/dashboard">Dasbboard</NavLink>
      </Button>
      <Button className="mb-5 h-6 bg-primary text-white">
        <NavLink to="/admin/donations">Donations</NavLink>
      </Button>
      <Button className="mb-5 h-6 bg-primary text-white">
        <NavLink to="/admin/create-subscription">Create Subscription</NavLink>
      </Button>
      <Button className="mb-5 h-6 bg-primary text-white">
        <NavLink to="/admin/create-donation">Create Donation</NavLink>
      </Button>
      <Button className="mb-5 h-6 bg-primary text-white">
        <NavLink to="/admin/create-testiomial">Create Testiomial</NavLink>
      </Button>
    </ul>,
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Sider
        className={`h-full dark:bg-gray-950 `}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div
          className="text-white mt-20"
          style={{
            color: "white",
            height: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {siderItems}
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
