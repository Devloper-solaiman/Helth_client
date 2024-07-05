import App from "@/App";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/login/Register";
import { createBrowserRouter } from "react-router-dom";
import DashboardApp from "@/DashboardApp";
import Dashboard from "@/pages/Dashboard/Dashboard";
import CreateSubscription from "@/pages/Dashboard/CreateSubscription";
import Subscription from "@/components/Subscription/Subscription";
import NotFound from "@/pages/NotFound/NotFound";
import ProtectedRoute from "@/layout/ProtectedRoute";
import CreateTestimonial from "@/pages/Dashboard/CreateTestimonial";
import CreateDonations from "@/pages/Dashboard/CreateDonations";
import DonationDetails from "@/components/Donation/DonationDetails";
import DashBoardDonations from "@/pages/Dashboard/DashBoardDonations";
import AboutUs from "@/pages/About/AboutUs";
import Leaderboard from "@/pages/Liaderboard/Leaderboard";
import Community from "@/pages/Community/Community";
import Volunteer from "@/pages/Volunteer/Volunteer";
import SubscriptionDetail from "@/components/Subscription/SubscriptionDetail";
import Donations from "@/components/Donation/Donations";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardApp />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/donations",
        element: <DashBoardDonations />,
      },
      {
        path: "/admin/create-donation",
        element: <CreateDonations />,
      },
      {
        path: "/admin/create-subscription",
        element: <CreateSubscription />,
      },
      {
        path: "/admin/create-testiomial",
        element: <CreateTestimonial />,
      },
    ],
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/subscriptions",
        element: <Subscription />,
      },
      {
        path: "/subscription/:id",
        element: <SubscriptionDetail />,
      },
    ],
  },
]);
export default router;
