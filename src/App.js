import "./App.css";
//Router
import { Routes, Route } from "react-router-dom";
//Mis Componentes
import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import Inicio from "./components/Inicio";
import NuevaSolicitud from "./components/NuevaSolicitud";
import Solicitud from "./components/Solicitud";
import SolicitudGestion from "./components/Gestion/SolicitudGestion";
import SolicitudManual from "./components/Gestion/SolicitudManual";
import Loader from "./components/UI/loader";
import MiDialog from "./components/UI/MiDialog";
import _ from "lodash";

//Rules
import Rules_Usuario from "./components/Api/Rules_Usuario";
import { useEffect, useState } from "react";

import Gestion from "./components/Gestion";
import ConfiguracionPliegos from "./components/Gestion/ConfiguracionPliegos";

function App() {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    health();
    consultarLoginVedi();
  }, []);

  async function health() {
    let health = await Rules_Usuario.health();

    console.log(health);
  }

  async function consultarLoginVedi() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const sesionIdQueryString = urlParams.get("sesionid");
      if (sesionIdQueryString) {
        //Si existe el query param "?sesionid"
        let { refreshToken, token } = await Rules_Usuario.obtenerTokenSesion(
          sesionIdQueryString
        );

        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
      }

      let token = localStorage.getItem("token");

      if (
        token === undefined ||
        token === null ||
        token === "undefined" ||
        token === ""
      ) {
        cerrarSesion();
        return;
      }
      setCargando(false);
      login();
    } catch (error) {
      cerrarSesion();
    }
  }

  async function login() {
    window.history.replaceState(null, null, window.location.pathname);
  }

  const cerrarSesion = () => {
    setCargando(false);
    setError(true);
  };

  return (
    <div className="App">
      {cargando ? (
        <div>
          <Loader />
        </div>
      ) : error ? (
        <MiDialog
          open={error}
          title="Atencion!"
          message="Por favor, ingrese a través del Portal de Vecino Digital (VeDi)"
          actions={[
            {
              text: "Aceptar",
              onClick: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                window.location.href = window.env.REACT_APP_URL_LOGIN;
                //window.location.href = process.env.REACT_APP_URL_LOGIN;
              },
            },
          ]}
        />
      ) : (
        <div className="App">
          <Header className="App-header" />
          <div>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/NuevaSolicitud" element={<NuevaSolicitud />} />
              <Route path="/Solicitudes" element={<Solicitud />} />
              <Route path="/Gestion" element={<Gestion />} />
              <Route
                path="/ConfiguracionPliegos"
                element={<ConfiguracionPliegos />}
              />
              <Route path="/SolicitudGestion" element={<SolicitudGestion />} />
              <Route path="/SolicitudManual" element={<SolicitudManual />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
