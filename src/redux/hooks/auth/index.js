import { useSelector, useDispatch } from "react-redux";
import * as actions from "redux/actions/auth/loginActions";
import { VIEWER } from "configs/Roles";

export const useAuth = () => {
  const { user, token, isAuthenticated, isLoading , data } = useSelector(
    (state) => state.auth
  );
  
  const dispatch = useDispatch();

  const login = (values) => {
    dispatch(actions.login(values));
  };

  const updateUserInfo = (newValues) => {

    dispatch(actions.updateUserInfo(newValues))
  }

  const logout = () => {
    dispatch(actions.logout());
  };

  return {
    data,
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUserInfo
  };
};

export const useIsAuthorized = () => {
  const { data } = useAuth();
  return data  !== VIEWER;
};
