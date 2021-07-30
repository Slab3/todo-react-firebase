import React, {useState} from 'react';
import '../styles/main.scss'
import {NavLink} from "react-router-dom";
import Input from "../components/Common/Input/Input";
import ButtonForm from "../components/Common/ButtonForm/ButtonForm";

export const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>)=> { setName(event.target.value) };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>)=> { setEmail(event.target.value) };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>)=> { setPassword(event.target.value) };

  const onSubmit = ()=> {
    console.log(name + ' name | ' + email + ' email | ' + password + ' password')
  };


  return (
    <div className={"block-sign-component"}>
      <h2>Sign Up</h2>

      <form action="" className={"formCenterVertical"} onSubmit={onSubmit}>
        <Input
          type={"text"}
          id={"name"}
          maxWidth={350}
          placeholder={"name"}
          value={name}
          setValue={handleName}
        />
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
          text={"Register"}
          maxWidth={350}
        />
      </form>

      <div>
        <span>Already have an account?</span>
        <NavLink to="/SignIn" className={"nav-link"}> Sign In </NavLink>
      </div>
    </div>
  )
};

export default SignUp;
