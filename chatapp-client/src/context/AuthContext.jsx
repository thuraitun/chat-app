import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const initialRegisterInfo = {
        name: "",
        email: "",
        password: "",
      };
    const initialLoginInfo = {
        name: "",
        email: "",
        password: "",
      };
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(initialRegisterInfo);
  const [loginInfo, setLoginInfo] = useState(initialLoginInfo);

  console.log("User", user);

  useEffect(() => {
    const user = localStorage.getItem('User');
    setUser(JSON.parse(user));
  }, [])

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const registerUser = useCallback(async (e) => {

    e.preventDefault();

    setIsLoading(true);
    setIsError(null);

    const response = await postRequest(
      `${baseUrl}/users/register`,
      JSON.stringify(registerInfo)
    );

    setIsLoading(false);

    if (response.error) {
      return setIsError(response);
    }

    localStorage.setItem("User", JSON.stringify(response));
    setUser(response);

  }, [registerInfo]);


  const loginUser = useCallback(async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(null);

    const response = await postRequest(
      `${baseUrl}/users/login`,
      JSON.stringify(loginInfo)
    );

    setIsLoading(false);

    if(response.error) {
      return setIsError(response)
    }

    localStorage.setItem("User", JSON.stringify(response));

    setUser(response)

  }, [loginInfo]);

  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        isError,
        isLoading,
        logoutUser,
        loginUser,
        loginInfo,
        updateLoginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
