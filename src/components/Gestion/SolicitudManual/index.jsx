import React, { useState } from "react";
//MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
//Estilos
import "./styles.css";
//Router
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MiDialog from "../../UI/MiDialog";

export default function SolicitudManual() {
  const [pliegos, setPliegos] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleChangePliegos = (event) => {
    setPliegos(event.target.value);
  };

  const onClickVolver = () => {
    setOpenDialog(true);
  };

  return (
    <div style={{ minHeight: "78vh" }}>
      <Grid
        container
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
            Nombre del Pliego
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, minWidth: 800 }}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Nombre del item"
              variant="filled"
              margin="dense"
            />
            <TextField
              fullWidth
              id="filled-multiline-static"
              label="Item"
              multiline
              rows={10}
              variant="filled"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          sx={{ margin: 1, color: "black" }}
          onClick={onClickVolver}
        >
          Cancelar
        </Button>
        <Button variant="contained" endIcon={<AddBoxIcon />}>
          Guardar
        </Button>
      </Grid>
      {openDialog ? (
        <MiDialog
          open={true}
          title="Atencion!"
          message="¿Está seguro de que quiere cancelar esta operación?"
          actions={[
            {
              text: "Cancelar",
              color: "secondary",
              variant: "contained",
              onClick: () => {
                setOpenDialog(false);
              },
            },
            {
              text: "Aceptar",
              variant: "contained",
              onClick: () => {
                navigate("/Gestion");
              },
            },
          ]}
        />
      ) : null}
    </div>
  );
}
