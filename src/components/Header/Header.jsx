import { Button, List } from "@mui/material";
import logo from "../../assets/logoLMTS.svg";
import Drawer from "@mui/material/Drawer";
import ItemSideBar from "../ItemSideBar/ItemSideBar";
import styles from "./header.module.css";

import gerenciarProjeto from "../../assets/icon-sidebar/gerenciar-projeto.svg";
import gerenciarBolsa from "../../assets/icon-sidebar/gerenciar-bolsa.svg";
import gerenciarEstudantes from "../../assets/icon-sidebar/gerenciar-estudante.svg";
import gerenciarOrientador from "../../assets/icon-sidebar/gerenciar-orientador.svg";
import gerenciarReuniao from "../../assets/icon-sidebar/gerenciar-reuniao.svg";
import gerenciarDocs from "../../assets/icon-sidebar/gerenciar-docs.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Drawer variant="permanent">
        <div className={styles.logo}>
          <Button onClick={() => navigate("/")}>
            <img src={logo} alt="Logo do LMTS" />
          </Button>
        </div>
        <List className={styles.SideBarContainer}>
          <ItemSideBar img={gerenciarProjeto} url={"projeto"} text="Projeto" />
          <ItemSideBar img={gerenciarReuniao} url={"reunião"} text="Reunião" />
          <ItemSideBar
            img={gerenciarOrientador}
            url={"orientadores"}
            text="Orientadores"
          />
          <ItemSideBar
            img={gerenciarEstudantes}
            url={"estudantes"}
            text="Estudantes"
          />
          <ItemSideBar img={gerenciarBolsa} url={"bolsas"} text="Bolsas" />
          <ItemSideBar
            img={gerenciarDocs}
            url={"documentos"}
            text="Documentos"
          />
        </List>
      </Drawer>
    </section>
  );
};

export default Header;
