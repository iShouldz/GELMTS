import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Estudantes from "./pages/Estudantes/Estudantes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/estudantes", element: <Estudantes /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
