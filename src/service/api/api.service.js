import axios from "axios";

export const apiLogin = async (res) =>
  await axios.post("http://localhost:5000/api/sessions", res);
