import axios from "axios";

export function getList(item, id) {
  return axios.get(`http://localhost:5001/api/${item}/${id}`);
}

export function addToList(item1, item2, item1Id, diploma) {
  return axios.post(
    `http://localhost:5001/api/${item1}/${item1Id}/${item2}`,
    diploma
  );
}

export default { getList, addToList };
