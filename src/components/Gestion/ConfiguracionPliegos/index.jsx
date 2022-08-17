import React, { useEffect, useState } from "react";
//MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
//Estilos
import "./styles.css";
//Router
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
//Rules
import Rules_Item from "../../Api/Rules_Item";

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

export default function ConfiguracionPliegos() {
  const [pliegos, setPliegos] = useState("");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    obtenerItems();
  }, []);

  const obtenerItems = async () => {
    try {
      let data = await Rules_Item.getItems();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSelect = (opcion) => {
    setItemSelected(opcion);
    console.log(itemSelected);
  };

  const handleChange = (event) => {
    setItemSelected(event.target.value);
  };

  const handleChangePliegos = (event) => {
    setPliegos(event.target.value);
  };

  const onClickVolver = () => {
    navigate("/Gestion");
  };

  const onClickEditar = () => {
    navigate("/NuevaSolicitud");
  };

  return (
    <div style={{ minHeight: "78vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} lg={12}>
          <Typography
            direction="row"
            justify="center"
            alignItems="center"
            id="subTitle"
            color="secondary"
            style={{ padding: "24px" }}
            variant="h4"
          >
            Configuracion de Pliegos
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <Typography>
                Seleccione el item del pliego que desea modificar
              </Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <FormControl sx={{ m: 1, minWidth: 380 }}>
                <Select
                  id="equipamiento"
                  value={itemSelected ? itemSelected.nombre : ""}
                  label="Equipamiento"
                  input={<BootstrapInput />}
                >
                  {items.map((opcion) => (
                    <MenuItem
                      key={opcion.id}
                      onClick={() => setItemSelected(opcion)}
                      value={opcion.nombre}
                      defaultValue=""
                    >
                      {opcion.nombre}
                    </MenuItem>
                  ))}
                  {console.log(itemSelected)}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          {itemSelected ? (
            <Card style={{ margin: "15px" }} id="configPliegos">
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <Typography>{itemSelected.nombre}</Typography>
                </Grid>
              </Grid>
              <div
                dangerouslySetInnerHTML={{ __html: itemSelected.descripcion }}
              />
            </Card>
          ) : null}
        </Grid>
        <Grid item xs={12} lg={12}>
          <Button
            variant="outlined"
            sx={{ margin: 1, color: "black" }}
            onClick={onClickVolver}
          >
            Volver
          </Button>
          <Button variant="outlined" sx={{ margin: 1 }} onClick={onClickEditar}>
            Editar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
