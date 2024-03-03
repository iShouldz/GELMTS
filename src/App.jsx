import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Estudantes from "./pages/Estudantes/Estudantes";
import CadastrarEstudante from "./pages/CadastrarEstudante/CadastrarEstudante";

import Login from "./pages/Login/Login";
import Orientador from "./pages/Orientador/Orientador";
import CadastrarOrientador from "./pages/CadastrarOrientador/CadastrarOrientador";
import Reuniao from "./pages/Reuniao/Reuniao";
import CadastrarReuniao from "./pages/CadastrarReuniao/CadastrarReuniao";
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
        { path: "orientadores", element: <Orientador /> },
        {
          path: "orientadores/cadastrar-orientador",
          element: <CadastrarOrientador />,
        },
        { path: "reunião", element: <Reuniao />},
        {
          path: "reunioes/cadastrar-reuniao",
          element: <CadastrarReuniao />,
        }
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
