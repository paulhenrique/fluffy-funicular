import { Grid } from "@mui/material";
import { FC } from "react";
import SideNav from "../../components/SideNav";
import DefaultTemplate from "../Default";

const SettingsTemplate: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <DefaultTemplate>
      <Grid container>
        <Grid item xs={3}>
          <SideNav />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </DefaultTemplate>
  );
};

export default SettingsTemplate;
