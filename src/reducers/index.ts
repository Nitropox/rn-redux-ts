import { combineReducers } from "redux";
import { User } from "../actions";
import { usersReducer } from "./usersReducer";

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer
});
