import React from "react";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/IconButton";

//Estilos
import "./style.css";
//Router
import { useNavigate } from "react-router-dom";
//assets
import MisSolicitudes from "../../assets/Mis-Solicitudes.png";
import NuevaSolicitud from "../../assets/Nueva-Solicitud.png";
import Gestion from "../../assets/Gestion.png";

export default function Inicio() {
  const navigate = useNavigate();

  const onClickSolicitud = () => {
    navigate("/Solicitudes");
  };

  const onClickNuevaSolicitud = () => {
    navigate("/NuevaSolicitud");
  };
  const onClickGestion = () => {
    navigate("/Gestion");
  };

  return (
    <div style={{ marginTop: "20vh", marginBottom: "18vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}></Grid>
        <Grid item xs={12} lg={4}>
          <Button id="botonMenuPrincipal" onClick={onClickSolicitud}>
            <Card id="contenedorPrincipal">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography>Mis Solicitudes</Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    id="misSolicitudesImg"
                    alt="Mis Solicitudes"
                    src={MisSolicitudes}
                  />
                </Grid>
              </Grid>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button id="botonMenuPrincipal" onClick={onClickNuevaSolicitud}>
            <Card id="contenedorPrincipal">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography>Generar Solicitud</Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    id="misSolicitudesImg"
                    alt="Mis Solicitudes"
                    src={NuevaSolicitud}
                  />
                </Grid>
              </Grid>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button id="botonMenuPrincipal" onClick={onClickGestion}>
            <Card id="contenedorPrincipal">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography>Gestion</Typography>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={12}>
                  <img
                    id="misSolicitudesImg"
                    alt="Mis Solicitudes"
                    src={Gestion}
                  />
                </Grid>
              </Grid>
            </Card>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
