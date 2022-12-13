import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CgProfile } from "react-icons/cg";
import { SiFoodpanda } from "react-icons/si";
import { routesPath } from "../../router/ROUTES";
import { Link } from "react-router-dom";

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Escolha um item
        </ListSubheader>
      }
    >
      <ListItemButton component={Link} to={routesPath.profile}>
        <ListItemIcon>
          <CgProfile />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
      <ListItemButton component={Link} to={routesPath.pandas}>
        <ListItemIcon>
          <SiFoodpanda />
        </ListItemIcon>
        <ListItemText primary="Azeitonas" />
      </ListItemButton>
    </List>
  );
}
