import http from "./httpService";

export function getCategoriesApi(options) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}

export function createCategoriesApi(data) {
  return http.post(`/category/add`, data).then(({ data }) => data.data);
}

export function deleteCategoriesApi({ id, options = {} }) {
  return http
    .delete(`/category/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export function editCategoriesApi({ id, data, options = {} }) {
  return http
    .patch(`/category/update/${id}`, data, options)
    .then(({ data }) => data.data);
}
