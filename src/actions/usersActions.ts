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

export interface DeleteUserAction {
  type: ActionTypes.deleteUser;
  payload: User[];
}

export interface AddUserAction {
  type: ActionTypes.addUser;
  payload: User[];
}

export interface EditUserAction {
  type: ActionTypes.editUser;
  payload: User[];
}
export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    const users = await AsyncStorage.getItem("users");
    console.log("getting users");
    if (users) {
      dispatch<GetUsersAction>({
        type: ActionTypes.getUsers,
        payload: JSON.parse(users)
      });
    }
  };
};

export const addUser = (
  state: User[],
  name: String,
  age: number,
  callback?: Function
) => {
  return async (dispatch: Dispatch) => {
    const updatedState = [
      ...state,
      {
        id:
          state.length === 0
            ? 0
            : state.reduce(
                (max, item) => (item.id > max ? item.id : max),
                state[0].id
              ) + 1,
        name,
        age
      }
    ];
    await AsyncStorage.setItem("users", JSON.stringify(updatedState));
    dispatch({ type: ActionTypes.addUser, payload: updatedState });
    if (callback) {
      callback();
    }
  };
};

export const deleteUser = (state: User[], id: User["id"]) => {
  return async (dispatch: Dispatch) => {
    const updatedState: User[] = state.filter(user => user.id !== id);
    await AsyncStorage.setItem("users", JSON.stringify(updatedState));
    dispatch<DeleteUserAction>({
      type: ActionTypes.deleteUser,
      payload: updatedState
    });
  };
};

export const editUser = (
  state: User[],
  id: number,
  name: String,
  age: number
) => {
  return async (dispatch: Dispatch) => {
    const editedUserIndex = state.findIndex(user => user.id === id);
    const updatedState = [...state];
    updatedState[editedUserIndex] = {
      id,
      name,
      age
    };
    await AsyncStorage.setItem("users", JSON.stringify(updatedState));
    dispatch<EditUserAction>({
      type: ActionTypes.editUser,
      payload: updatedState
    });
  };
};
