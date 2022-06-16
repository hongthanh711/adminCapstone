function Servcies() {
  this.getListProductApi = function () {
    return axios({
      url: "https://6290b9f7665ea71fe13967e3.mockapi.io/capstoneJs",
      method: "GET",
    });
  };

  this.deleteProductApi = function (name) {
    return axios({
      url: `https://6290b9f7665ea71fe13967e3.mockapi.io/capstoneJs/${name}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://6290b9f7665ea71fe13967e3.mockapi.io/capstoneJs",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://6290b9f7665ea71fe13967e3.mockapi.io/capstoneJs/${id}`,
      method: "GET",
    });
  };

  this.updateProductApi = function (product) {
    return axios({
      url: `https://6290b9f7665ea71fe13967e3.mockapi.io/capstoneJs/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
