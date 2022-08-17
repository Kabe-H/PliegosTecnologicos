import itemApi from "./Rules_Api";

const Rules_Item = {
  getItems: async () => {
    const url = "/v1/Items/GetItems";
    return itemApi
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

export default Rules_Item;
