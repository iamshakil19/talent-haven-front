import React from "react";
import RegisterForm from "./RegisterForm";
import { RegisterConfig } from "./Register.config";

const Register = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="mb-1">{RegisterConfig.STATIC_TEXT.HEADING}</h3>
        <p>{RegisterConfig.STATIC_TEXT.SUB_HEADING}</p>
      </div>
      <RegisterForm />
    </>
  );
};

export default Register;
