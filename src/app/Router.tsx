import { createBrowserRouter } from "react-router-dom";
import Page from "../pages/Page"
import Click from "../components/Clickmovie/Clickmovie";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Page/>
    },
    {
      path: "/movie/:id",
      element: <Click/>
    }
  ]);
export default router