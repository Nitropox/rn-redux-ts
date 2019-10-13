import { ActionTypes } from "../actions/types";
import { User, Action } from "../actions";

const initialState = [{ id: 0, name: "Adam", age: 41 }];

export const usersReducer = (state: User[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.getUsers:
      return action.payload;
    case ActionTypes.deleteUser:
      return action.payload;
    case ActionTypes.addUser:
      return action.payload;
    case ActionTypes.editUser:
      return action.payload;
    default:
      return state;
  }
};
