import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import {AuthContext} from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;