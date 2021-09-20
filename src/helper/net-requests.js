import axios from "axios";
import { API_URL } from "./constants";

export const getUsers = () => {
  const {
    data: { data },
    status
  } = axios.get(API_URL);

  if (status === 200 || status === 201) {
    return data;
  } else {
    throw new Error("Unable to fetch data");
  }
};
