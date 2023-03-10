import { history } from "../../../history";
import { baseURL } from "api/config";
import { toast } from "react-toastify";
import _axios from "axios";
import { authStorage } from "utility/authStorage";

const API = {
  LOGIN: `/api/auth/admin_login`,
  LOGOUT: `/api/admin/logout`,
};

export const login = ({ username, password }) => {
  const axios = _axios.create({
    baseURL,
  });
  return (dispatch) => {
    dispatch({
      type: "START_LOGIN",
    });
    axios
      .post(API.LOGIN, { username, password })
      .then((response) => {
        const { data } = response.data;
        console.log(data)
        if (data && data.api_token ) {
          const { api_token } = data;
         
          authStorage.store(data, api_token);

          dispatch({
            type: "LOGIN",
            payload: { data, api_token },
          });

          history.push("/dashboard");
          dispatch({
            type: "END_LOGIN",
          });
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Failed To Login");
        dispatch({
          type: "END_LOGIN",
        });
      });
  };
};
export const updateUserInfo = (user) => {
    authStorage.store(user)
  return (dispatch) => {
    dispatch({
      type: "UPDATE",
      payload: { user }
    })

  }
}

export const logout = () => {
  return (dispatch) => {
    const token = authStorage.getToken();
    authStorage.remove();

    dispatch({ type: "LOGOUT" });
    history.push("/dashboard/login");

    if (token) {
      const axios = _axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        baseURL,
      });
      axios.get(API.LOGOUT).catch(() => { });
    }
  };
};
