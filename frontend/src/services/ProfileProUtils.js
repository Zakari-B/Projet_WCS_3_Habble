import backendAPI from "./backendAPI";

export function getList(item) {
  return backendAPI.get(`/api/${item}`);
}

export function getListforAnId(item, id) {
  return backendAPI.get(`/api/${item}/${id}`);
}

export function getOneItemOfList(item1, item2, item1Id, item2Id) {
  return backendAPI.get(`/api/${item1}/${item1Id}/${item2}/${item2Id}`);
}

export function addToList(item1, item2, item1Id, data) {
  return backendAPI.post(`/api/${item1}/${item1Id}/${item2}`, data);
}

export function updateItemList(item1, item2, item1Id, item2Id, data) {
  return backendAPI.put(`/api/${item1}/${item1Id}/${item2}/${item2Id}`, data);
}

export function deleteItemList(item1, item2, item1Id, item2Id) {
  return backendAPI.delete(`/api/${item1}/${item1Id}/${item2}/${item2Id}`);
}
export default {
  getList,
  getListforAnId,
  getOneItemOfList,
  addToList,
  updateItemList,
  deleteItemList,
};
