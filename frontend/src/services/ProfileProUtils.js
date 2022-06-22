import axios from "axios";

export function getList(item) {
  return axios.get(`http://localhost:5001/api/${item}`);
}

export function getListforAnId(item, id) {
  return axios.get(`http://localhost:5001/api/${item}/${id}`);
}

export function getOneItemOfList(item1, item2, item1Id, item2Id) {
  return axios.get(
    `http://localhost:5001/api/${item1}/${item1Id}/${item2}/${item2Id}`
  );
}

export function addToList(item1, item2, item1Id, data) {
  return axios.post(
    `http://localhost:5001/api/${item1}/${item1Id}/${item2}`,
    data
  );
}

export function updateItemList(item1, item2, item1Id, item2Id, data) {
  return axios.put(
    `http://localhost:5001/api/${item1}/${item1Id}/${item2}/${item2Id}`,
    data
  );
}

export function deleteItemList(item1, item2, item1Id, item2Id) {
  return axios.delete(
    `http://localhost:5001/api/${item1}/${item1Id}/${item2}/${item2Id}`
  );
}
export default {
  getList,
  getListforAnId,
  getOneItemOfList,
  addToList,
  updateItemList,
  deleteItemList,
};
