import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
const { Header, Content } = Layout;

const DashboardLayout = () => {
  const { darkMode } = useAppSelector((store) => store.theme);

  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <Layout style={{ height: "100%" }}>
        <Sidebar />
        <Layout className="dark:bg-gray-800 ">
          <Header className="dark:bg-gray-900  flex justify-center items-center gap-3">
            <Button className="bg-primary text-white h-7 p-2 border-none">
              <NavLink to="/">Home</NavLink>
            </Button>
            <h1 className="text-white text-2xl font-semibold ">
              Helth Dashboard
            </h1>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
