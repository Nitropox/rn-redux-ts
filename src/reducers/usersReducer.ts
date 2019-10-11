import { ActionTypes } from "../actions/types";
import { User, GetUsersAction } from "../actions";

const initialState = [{ id: 0, name: "Adam", age: 41 }];

export const usersReducer = (
  state: User[] = initialState,
  action: GetUsersAction
) => {
  switch (action.type) {
    case ActionTypes.getUsers:
      return action.payload;
    default:
      return state;
  }
};
