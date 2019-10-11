import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { AsyncStorage } from "react-native";

export interface User {
  id: number;
  name: String;
  age: number;
}

export interface GetUsersAction {
  type: ActionTypes.getUsers;
  payload: User[];
}

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    const users = await AsyncStorage.getItem("users");
    if (users) {
      dispatch<GetUsersAction>({
        type: ActionTypes.getUsers,
        payload: JSON.parse(users)
      });
    }
  };
};
