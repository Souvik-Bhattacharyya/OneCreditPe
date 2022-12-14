import axios from "axios";
import {store} from "../Redux/store";
export default class API {
  constructor(object) {
    this.instance = axios.create({baseURL: object.baseUrl});
  }

  get(endpoint, params, header) {
    return this.httpRequest("GET", endpoint, params, header);
  }
  delete(endpoint, params, header) {
    return this.httpRequest("DELETE", endpoint, params, header);
  }

  post(endpoint, params, header) {
    return this.httpRequest("POST", endpoint, params, header);
  }

  postForm(endpoint, params, header) {
    return this.httpRequestForFormData("POST", endpoint, params, header);
  }

  update(endpoint, params, header) {
    return this.httpRequest("PUT", endpoint, params, header);
  }

  updateForm(endpoint, params, header) {
    return this.httpRequestForFormData("PUT", endpoint, params, header);
  }

  async httpRequest(method, url, data = null, header = null) {
    let state = store.getState();
    let clientToken = state.auth.clientToken;
    return new Promise((resolve, reject) => {
      let body = {};
      if (method === "GET") {
        body = {
          method: method,
          url: url,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                "Content-Type": "application/json",
              },
        };
      } else {
        body = {
          method: method,
          url: url,
          data: data,
          headers: header
            ? header
            : {
                authorization: clientToken ? `Bearer ${clientToken}` : null,
                "Content-Type": "application/json",
              },
        };
      }

      this.instance
        .request(body)
        .then(response => {
          // resolve
          console.log(response);
          return resolve(response);
        })
        .catch(error => {
          // reject
          console.log(error);
          return reject(error);
        });
    });
  }

  async httpRequestForFormData(method, url, params) {
    let state = store.getState();
    let clientToken = state.auth.clientToken;

    return new Promise((resolve, reject) => {
      let options = {
        method: method,
        url: url,
        data: params,
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/x-www-form-urlencoded",
          // Accept: "application/json",
          Authorization: clientToken ? `Bearer ${clientToken}` : null,
        },
      };
      this.instance
        .request(options)
        .then(response => {
          console.log("res-->", response);
          resolve(response);
        })
        .catch(error => {
          console.log("err-->", error);
          reject(error);
        });
    });
  }
}
