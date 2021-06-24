const defaultState = {
  userInfo: {
    password: "",
    email: "",
    firstName: "",
    lastName: "",

  },
}

// Поидее сюда нужно добавить еще много вещей, типо loading, auth_fail, auth_success , я сделал только лайтовую версию, очень даже лайтовый, просто пока нету же база данных;))  


const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const REGISTER_USER = "REGISTER_USER";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { userInfo: action.payload };
    case LOGIN_USER:
      return { userInfo: action.payload }
    case LOGOUT_USER:
      return { userInfo: {} }
    default:
      return state;
  }
}

export const loginAction = (payload) => {
  return { type: LOGIN_USER, payload };
}

export const logoutAction = () => {
  return { type: LOGOUT_USER };
}

export const registerAction = (payload) => {
  return { type: REGISTER_USER, payload };
}