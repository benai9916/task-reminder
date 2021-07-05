import * as actionType from "../../constants/actionType";

const authReducer = (state = { isLoggedin: false }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("authstatus", true);
      return { ...state, authData: true, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.removeItem("authstatus");
      return { ...state, authData: false, loading: false, errors: null };

    case actionType.LOGIN:
      localStorage.setItem("authstatus", true);
      return { ...state, authData: true, loading: false, errors: null };

    default:
      return state;
  }
};

export default authReducer;
