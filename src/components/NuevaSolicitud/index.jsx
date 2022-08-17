import React, { useState } from "react";
//mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./styles.css";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function NuevaSolicitud() {
  const [equipamiento, setEquipamiento] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [arrayCantidad, setArrayCantidad] = useState([]);

  const handleChangeEquipamiento = (event) => {
    setEquipamiento(event.target.value);
    console.log(cantidad);
  };

  const handleChangeCantidad = (event) => {
    let result = event.target.value.replace(/\D/g, "");
    setCantidad(result);
  };

  const onClickAgregar = (cantidad) => {
    setArrayCantidad(...cantidad);
  };

  return (
    <div style={{ minHeight: "81.1vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ marginBottom: "1.1vh" }}
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
            Generar Solicitud
          </Typography>
        </Grid>
        {/* Form */}
        <Grid item xs={6} style={{ padding: "150px" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className="contenedorPrincipal"
          >
            <Grid item xs={12}>
              <Typography>
                Seleccione el equipamiento informatico que necesita
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 1, minWidth: 380 }}>
                <Select
                  id="equipamiento"
                  value={equipamiento}
                  label="Equipamiento"
                  onChange={handleChangeEquipamiento}
                  input={<BootstrapInput />}
                  fullwidth
                >
                  <MenuItem value={"Notebook"}>Notebook</MenuItem>
                  <MenuItem value={"Impresora"}>Impresora</MenuItem>
                  <MenuItem value={"Pc de Escritorio"}>
                    Pc de Escritorio
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography>Seleccione la cantidad que necesite</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                onChange={handleChangeCantidad}
                value={cantidad}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "10px" }}>
              <Button variant="outlined" onClick={onClickAgregar}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Resumen */}
        <Grid item xs={6} style={{ padding: "150px" }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="contenedorPrincipal"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h6">
                Equipamiento Informatico Solicitado
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <nav aria-label="secondary mailbox folders">
                <List
                  sx={{
                    width: "100%",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 180,
                    minHeight: 180,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={equipamiento + " " + cantidad} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item xs={12} style={{ margin: "10px" }}>
              <Button variant="outlined">Enviar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
