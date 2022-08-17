import axios from "axios";

const Rules_Usuario = {
  health: async () => {
    console.log();
    const url = `${process.env.REACT_APP_URL_WS}/v1/Usuario/Health`;

    return await axios
      .get(url)
      .then((response) => {
        if (!response.data.ok) {
          throw Error(response.data.error || "Error procesando la solicitud");
        }
        return response.data.return;
      })
      .catch((error) => {
        throw Error(error || "Error procesando la solicitud");
      });
  },
  validarTokenSesion: async () => {
    const url = `${process.env.REACT_APP_URL_WS}/v1/Usuario/ValidarCookie`;

    return await axios
      .get(url, { withCredentials: true })
      .then((response) => {
        if (!response.data.ok) {
          throw Error(response.data.error || "Error procesando la solicitud");
        }
        return response.data.return;
      })
      .catch((error) => {
        throw Error(error || "Error procesando la solicitud");
      });
  },
  obtenerTokenSesion: async (sesionid) => {
    const url = `${process.env.REACT_APP_URL_WS}/v1/Usuario/ObtenerTokenSesion`;

    return await axios
      .post(url, {
        SesionId: sesionid,
        AppKey: `${process.env.REACT_APP_KEY}`,
      })
      .then((response) => {
        if (!response.data.ok) {
          throw Error(response.data.error || "Error procesando la solicitud");
        }
        return response.data.return;
      })
      .catch((error) => {
        throw Error(error || "Error procesando la solicitud");
      });
  },
  getDatos: async () => {
    const url = `/v1/Usuario/Usuario`;
    return await axios
      .get(url)
      .then((response) => {
        if (!response.data.ok) {
          throw Error(response.data.error || "Error procesando la solicitud");
        }
        return response.data.return;
      })
      .catch((error) => {
        throw Error(error || "Error procesando la solicitud");
      });
  },
  getRol: async () => {
    const url = `/v1/Usuario/Rol`;
    return await axios
      .get(url)
      .then((response) => {
        if (!response.data.ok) {
          throw Error(response.data.error || "Error procesando la solicitud");
        }
        return response.data.return;
      })
      .catch((error) => {
        throw Error(error || "Error procesando la solicitud");
      });
  },
};

export default Rules_Usuario;
