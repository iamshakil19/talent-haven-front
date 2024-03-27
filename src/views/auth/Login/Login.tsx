import React from "react";
import LoginForm from "./LoginForm";
import { LoginConfig } from "./Login.config";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();

  return (
    <>
      <div className="mb-8">
        <h3 className="mb-1">{LoginConfig.STATIC_TEXT.HEADING}</h3>
        <p>{LoginConfig.STATIC_TEXT.SUB_HEADING}</p>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
