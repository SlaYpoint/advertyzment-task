import axios from "axios";
import { API_URL } from "./constants";

export const getUsers = async () => {
  const {
    data: { data },
    status
  } = await axios.get(API_URL);

  if (status === 200 || status === 201) {
    return data;
  } else {
    throw new Error("Failed to get users");
  }
};
