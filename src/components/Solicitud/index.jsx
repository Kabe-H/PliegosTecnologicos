import React from "react";

//Material-ui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

import ContenedorCard from "./ContenedorCard";

import "./styles.css";

export default function Solicitud() {
  const theme = createTheme();

  return (
    <div style={{ minHeight: "79vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography
            container
            direction="row"
            justify="center"
            alignItems="center"
            id="subTitle"
            color="secondary"
            style={{ padding: "24px" }}
            variant="h4"
          >
            Mis Solicitudes
          </Typography>
        </Grid>
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
        <ContenedorCard />
      </Grid>
    </div>
  );
}
