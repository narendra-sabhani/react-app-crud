import { IUser } from "../Types/IUser";

// different action types, that we can applied to our reducer and state
export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";


export type ActionTypes =
    | { type: typeof ADD_USER }
    | { type: typeof DELETE_USER, payload: number }
    | { type: typeof UPDATE_USER, payload: IUser }
    | { type: typeof SET_USERS, payload: IUser[] }


export const addUser = (): ActionTypes => ({ type: "ADD_USER" });

export const deleteUser = (id: number): ActionTypes => ({
    type: "DELETE_USER",
    payload: id
});

export const updateUser = (id: number, user: IUser): ActionTypes  => ({

    type: "UPDATE_USER",
    payload: user

});

export const setUsers = (users: IUser[]): ActionTypes => ({
    type: "SET_USERS",
    payload: users,
  });
