import { GET_INFO } from "./constant";

export default function show_info(usersInfo) {
  return {
    type: GET_INFO,
    users: usersInfo
  };
}
