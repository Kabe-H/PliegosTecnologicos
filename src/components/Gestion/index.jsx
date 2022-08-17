import React from "react";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/IconButton";
//Estilos
import "./styles.css";
//Router
import { useNavigate } from "react-router-dom";
//assets
import Solicitud from "../../assets/Solicitud.png";
import SolicitudManual from "../../assets/Solicitud-Manual.png";
import ConfigPliegos from "../../assets/Configuracion-Pliegos.png";

export default function Gestion() {
  const navigate = useNavigate();

  const onClickConfigPliegos = () => {
    navigate("/ConfiguracionPliegos");
  };

  const onClickSolicitudGestion = () => {
    navigate("/SolicitudGestion");
  };
  const onClickGestion = () => {
    navigate("/SolicitudManual");
  };

  return (
    <div>
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
        Gestion
      </Typography>
      <div style={{ marginTop: "20vh", marginBottom: "10.9vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12} lg={4} id="contenedorSecundario">
            <Button id="botonPrincipal" onClick={onClickConfigPliegos}>
              <Card id="contenedorPrincipal">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xs={12}>
                    <Typography>Configuracion de Pliego</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <img
                      id="ConfigPliegosImg"
                      alt="ConfigPliegos"
                      src={ConfigPliegos}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} lg={4} id="contenedorSecundario">
            <Button id="botonPrincipal" onClick={onClickSolicitudGestion}>
              <Card id="contenedorPrincipal">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xs={12}>
                    <Typography>Solicitudes</Typography>
                  </Grid>

                  <Grid item xs={12} />
                  <Grid item xs={12}>
                    <img id="solicitudImg" alt="Solicitud" src={Solicitud} />
                  </Grid>
                </Grid>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} lg={4} id="contenedorSecundario">
            <Button id="botonPrincipal" onClick={onClickGestion}>
              <Card id="contenedorPrincipal">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography>Generar Solicitud Manual</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <img
                      id="SolicitudManualImg"
                      alt="Solicitud Manual"
                      src={SolicitudManual}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
