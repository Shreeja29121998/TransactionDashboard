import NotFoundPage from "../containers/NotFoundPage/index.jsx";
import LandingPage from "../containers/LandingPage/index.js";
import Dashboard from "../containers/Dashboard/index.js";

const routes = [
  {
    key: 0,
    path: "/",
    exact: true,
    Component: LandingPage,
  },
  {
    key: 1,
    path: "/dashboard",
    exact: true,
    Component: Dashboard,
  },
  {
    key: 500,
    Component: NotFoundPage,
  },
];

export default routes;
