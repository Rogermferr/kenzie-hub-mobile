import { AUTH_USER } from "./actionsTypes";

export const authUser = (user: any) => ({
  type: AUTH_USER,
  user,
});
