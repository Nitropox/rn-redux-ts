import {
  GetUsersAction,
  DeleteUserAction,
  AddUserAction,
  EditUserAction
} from "./usersActions";

export enum ActionTypes {
  getUsers,
  deleteUser,
  addUser,
  editUser
}

export type Action =
  | GetUsersAction
  | DeleteUserAction
  | AddUserAction
  | EditUserAction;
