import React from 'react';
import { useHistory } from "react-router";

export const SignUp: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Sign Up</h1>
      <h4>Text Lorem</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad debitis dolorum enim eos laudantium
        quae sequi temporibus. Impedit, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
        error et magni natus neque provident quae quod rem repudiandae! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Atque commodi consequatur delectus deleniti earum eligendi esse excepturi expedita
        illo nemo, nesciunt possimus quaerat quam quasi, quod quos repudiandae velit vitae. Animi assumenda
        at autem consectetur corporis cumque dolorum eligendi esse eveniet fuga harum hic id ipsum iste odit
        quidem ratione reprehenderit sint, totam veritatis vero.
      </p>
      <div className="redirectSignIn">
        <span>Already have account?</span>
        <button onClick={()=> history.push('/SignIn')}>
          Sign In
        </button>
      </div>
    </>
  )
};

export default SignUp;
