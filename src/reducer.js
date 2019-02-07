import { GET_INFO } from "./constant";

let users = null;

export default function Reducer(state = users, action) {
  switch (action.type) {
    case GET_INFO:
      const { usersInfo } = action;
      users = usersInfo;
      return users;
    default:
      return state;
  }
}
