import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Estudantes from "./pages/Estudantes/Estudantes";
import Projeto from "./pages/Projeto/Projeto";
import CadastrarEstudante from "./pages/CadastrarEstudante/CadastrarEstudante";
import CadastrarProjeto from "./pages/CadastrarProjeto/CadastrarProjeto";
import AtualizarProjeto from "./pages/AtualizarProjeto/AtualizarProjeto";
import Login from "./pages/Login/Login";
import Orientador from "./pages/Orientador/Orientador";
import CadastrarOrientador from "./pages/CadastrarOrientador/CadastrarOrientador";
import Reuniao from "./pages/Reuniao/Reuniao";
import CadastrarReuniao from "./pages/CadastrarReuniao/CadastrarReuniao";
import Bolsa from "./pages/Bolsa/Bolsa";
import CadastrarBolsa from "./pages/CadastrarBolsa/CadastrarBolsa";
import Documento from "./pages/Documento/Documento";
import CadastrarDocumento from "./pages/CadastrarDocumento/CadastrarDocumento";
import Vinculo from "./pages/Vinculo/Vinculo";
import Editais from "./pages/Editais/Editais";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/admin/Admin";

function App() {
  const isLogado = useSelector((state) => state.login.isLogado);
  const isAdmin = useSelector((state) => state.login.isAdmin)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(!isAdmin){
  //     navigate("/login")
  //   }
  // }, [isAdmin, navigate])

  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLogado ? <Login /> : <Root />,
      children: [
        { path: "/", element:  <Home /> },
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
        {
          path: "projeto/atualizar-projeto",
          element: <AtualizarProjeto />,
        },
        { path: "orientadores", element: <Orientador /> },
        {
          path: "orientadores/cadastrar-orientador",
          element: <CadastrarOrientador />,
        },
        { path: "reunião", element: <Reuniao /> },
        {
          path: "reunião/cadastrar-reuniao",
          element: <CadastrarReuniao />,
        },
        { path: "bolsa", element: <Bolsa /> },
        {
          path: "bolsa/cadastrar-bolsa",
          element: <CadastrarBolsa />,
        },
        { path: "documento", element: <Documento /> },
        {
          path: "documento/cadastrar-documento",
          element: <CadastrarDocumento />,
        },
        {
          path: "vinculo",
          element: <Vinculo />,
        },
        {
          path: "editais",
          element: <Editais />,
        },
        {/*Para validar o admin, pegue o objeto do usuario e verifique o campo de isAdmin */},
        { path: "admin", element: !isAdmin ? <Admin /> : <NotFound />},
        {
          path: "*",
          element: <NotFound />,
        },
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
