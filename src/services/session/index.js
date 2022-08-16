import React from "react";
import withAuthentication from "../withAuthentication";

const AuthUserContext = React.createContext({});

export default AuthUserContext;
export { withAuthentication };
