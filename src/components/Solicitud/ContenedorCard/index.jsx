import React, {useState} from "react";

//Material-ui
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./styles.css";

export default function ContenedorCard() {
  const [open, setOpen] = useState()

  

  return (
    <div style={{ margin: "2em" }}>
      <Grid
        id="cardHeader"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography>123456/2022</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button>Detalles</Button>
        </Grid>
      </Grid>
    </div>
  );
}
