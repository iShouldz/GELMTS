import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Estudantes from "./pages/Estudantes/Estudantes";
import Projeto from "./pages/Projeto/Projeto";
import CadastrarEstudante from "./pages/CadastrarEstudante/CadastrarEstudante";
import CadastrarProjeto from "./pages/CadastrarProjeto/CadastrarProjeto";

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
        { path: "projeto", element: <Projeto /> },
        {
          path: "projeto/cadastrar-projeto",
          element: <CadastrarProjeto />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
