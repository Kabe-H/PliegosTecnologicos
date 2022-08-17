import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";

export default function index() {
  return (
    <div style={{ minHeight: "81.8vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
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
            Solicitudes de Gestion
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Button variant="outlined">Completados</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" style={{ color: "red" }}>
                No Completados
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Card>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Usuario</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Detalle</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      135455/2022
                    </TableCell>
                    <TableCell>Juan Capdevilla</TableCell>
                    <TableCell>03/08/2022</TableCell>
                    <TableCell>No completado</TableCell>
                    <TableCell>Capturadora de video : 1</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      1321585/2022
                    </TableCell>
                    <TableCell>Ezequielito Soruco</TableCell>
                    <TableCell>01/08/2022</TableCell>
                    <TableCell>Completado</TableCell>
                    <TableCell>Impresora 3D : 1</TableCell>
                  </TableRow>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      1324585/2022
                    </TableCell>
                    <TableCell>Pablo Heredia</TableCell>
                    <TableCell>03/08/2022</TableCell>
                    <TableCell>No completado</TableCell>
                    <TableCell>PC Diseño : 1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
