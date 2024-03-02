import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Estudantes from "./pages/Estudantes/Estudantes";
import CadastrarEstudante from "./pages/CadastrarEstudante/CadastrarEstudante";
import Orientador from "./pages/Orientador/Orientador";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "estudantes", element: <Estudantes /> },
        {
          path: "estudantes/cadastrar-estudante",
          element: <CadastrarEstudante />,
        },
        {
          path: "orientadores", element: <Orientador />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
