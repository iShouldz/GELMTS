import { Button, IconButton, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ItemSideBar from "../ItemSideBar/ItemSideBar";
import styles from "./header.module.css";

//Assets
import gerenciarProjeto from "../../assets/icon-sidebar/gerenciar-projeto.svg";
import gerenciarBolsa from "../../assets/icon-sidebar/gerenciar-bolsa.svg";
import gerenciarEstudantes from "../../assets/icon-sidebar/gerenciar-estudante.svg";
import gerenciarOrientador from "../../assets/icon-sidebar/gerenciar-orientador.svg";
import gerenciarReuniao from "../../assets/icon-sidebar/gerenciar-reuniao.svg";
import gerenciarDocs from "../../assets/icon-sidebar/gerenciar-docs.svg";
import logo from "../../assets/logoLMTS.svg";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const Header = () => {
  const navigate = useNavigate();
  const [controlSideBar, setControlSideBar] = useState(false);

  return (
    <section className={styles.headerMain}>
      <Drawer variant="permanent">
        <IconButton
          onClick={() => setControlSideBar(true)}
          sx={{ marginTop: "20px" }}
        >
          <MenuIcon />
        </IconButton>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => navigate("/")}>
            {<HomeIcon sx={{ fontSize: 33 }} />}
          </Button>
          <ItemSideBar img={gerenciarProjeto} url={"projeto"} />
          <ItemSideBar img={gerenciarReuniao} url={"reunião"} />
          <ItemSideBar img={gerenciarOrientador} url={"orientadores"} />
          <ItemSideBar img={gerenciarEstudantes} url={"estudantes"} />
          <ItemSideBar img={gerenciarBolsa} url={"bolsa"} />
          <ItemSideBar img={gerenciarDocs} url={"documento"} />
          <ListItem button onClick={() => navigate("/vinculo")}>
            <Typography
              className={styles.SideBarItemContainer}
              fontWeight="bold"
              color="primary.main"
            >
              <DeviceHubIcon sx={{ fontSize: 33 }} />
            </Typography>
          </ListItem>
          <ListItem button onClick={() => navigate("/editais")}>
            <Typography
              className={styles.SideBarItemContainer}
              fontWeight="bold"
              color="primary.main"
            >
              <LibraryBooksIcon sx={{ fontSize: 33 }} />
            </Typography>
          </ListItem>
        </List>

        <ListItem
          sx={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <Button>
            <Avatar />
          </Button>
        </ListItem>
      </Drawer>

      <Drawer open={controlSideBar} onClose={() => setControlSideBar(false)}>
        <div className={styles.logo}>
          <Button onClick={() => navigate("/")}>
            <img src={logo} alt="Logo do LMTS" />
          </Button>
        </div>
        <List className={styles.SideBarContainer}>
          <ItemSideBar
            img={gerenciarProjeto}
            url={"projeto"}
            text="Gerenciar Projeto"
          />
          <ItemSideBar
            img={gerenciarReuniao}
            url={"reunião"}
            text="Gerenciar Reunião"
          />
          <ItemSideBar
            img={gerenciarOrientador}
            url={"orientadores"}
            text="Gerenciar Orientadores"
          />
          <ItemSideBar
            img={gerenciarEstudantes}
            url={"estudantes"}
            text="Gerenciar Estudantes"
          />
          <ItemSideBar
            img={gerenciarBolsa}
            url={"bolsa"}
            text="Gerenciar Bolsas"
          />
          <ItemSideBar
            img={gerenciarDocs}
            url={"documento"}
            text="Gerenciar Documentos"
          />

          <ListItem button onClick={() => navigate("/vinculo")}>
            <Typography
              className={styles.SideBarItemContainer}
              fontWeight="bold"
              color="primary.main"
            >
              <DeviceHubIcon sx={{ fontSize: 33 }} />
              Gerenciar Vinculo
            </Typography>
          </ListItem>
          <ListItem button onClick={() => navigate("/editais")}>
            <Typography
              className={styles.SideBarItemContainer}
              fontWeight="bold"
              color="primary.main"
            >
              <LibraryBooksIcon sx={{ fontSize: 33 }} />
              Gerenciar Editais
            </Typography>
          </ListItem>
        </List>

        <List>
          <ListItem
            sx={{
              position: "sticky",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "white",
              borderTop: "1px solid #e0e0e0",
              padding: "10px 20px",
            }}
          >
            <Button>
              <Avatar />
            </Button>
            <Typography>Olá, usuario</Typography>
          </ListItem>

          <ListItem button onClick={() => navigate("/admin")}>
            <Typography
              className={styles.SideBarItemContainer}
              fontWeight="bold"
              color="primary.main"
            >
              <AdminPanelSettingsIcon  sx={{ fontSize: 33 }}/>
              Funções adminstrativas
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </section>
  );
};

export default Header;
