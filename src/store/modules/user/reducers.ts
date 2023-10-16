import { AUTH_USER } from "./actionsTypes";

const userReducer = (state = null, action: any) => {
  switch (action.type) {
    case AUTH_USER:
      const { user } = action;
      return user;

    default:
      return state;
  }
};

export default userReducer;
