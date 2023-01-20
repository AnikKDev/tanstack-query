import axios from "axios";
export function getPost(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
}
