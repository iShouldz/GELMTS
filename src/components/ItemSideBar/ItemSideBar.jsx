/* eslint-disable react/prop-types */
import { ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from './itemSideBar.module.css'

const ItemSideBar = ({ img, url, text, close }) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(`/${url}`);
    close()
  };

  return (
    <ListItem button onClick={() => handleNavigate(url)} >
      <Typography className={styles.SideBarItemContainer} fontWeight="bold" color="primary.main">
        <img src={img} alt="" />
        {text}
      </Typography>
    </ListItem>
  );
};

export default ItemSideBar;
