import { IUser } from "./IUser";

export interface Store {
    users: IUser[];
    newUser: IUser | null;
}