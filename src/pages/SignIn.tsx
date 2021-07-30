import React, {useState} from 'react';
import '../styles/main.scss';
import {NavLink} from "react-router-dom";
import Input from "../components/Common/Input/Input";
import ButtonForm from "../components/Common/ButtonForm/ButtonForm";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>)=> { setEmail(event.target.value) };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>)=> { setPassword(event.target.value) };

  return (
    <div className={"block-sign-component"}>
      <h2>Sign In</h2>

      <form action="">
        <Input
          type={"text"}
          id={"email"}
          maxWidth={350}
          placeholder={"email"}
          value={email}
          setValue={handleEmail}
        />
        <Input
          type={"password"}
          id={"password"}
          maxWidth={350}
          placeholder={"password"}
          value={password}
          setValue={handlePassword}
        />
        <ButtonForm
          text={"Sign In"}
          maxWidth={350}
        />
      </form>

      <div>
        <span>Don't have an account?</span>
        <NavLink to="/SignUp" className={"nav-link"}> Sign Up </NavLink>
      </div>

    </div>
  )
};

export default SignIn;
