import {
  GetUsersAction,
  DeleteUserAction,
  AddUserAction
} from "./usersActions";

export enum ActionTypes {
  getUsers,
  deleteUser,
  addUser
}

export type Action = GetUsersAction | DeleteUserAction | AddUserAction;
