import React from 'react';
import { useHistory } from "react-router";

export const SignIn: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Sign In</h1>
      <h4>Text Lorem</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid assumenda culpa id iusto
        labore modi non officiis, pariatur, placeat quaerat quis quisquam rem saepe sed, suscipit temporibus totam
        ullam unde velit. Consectetur debitis fugit harum ipsam labore odit officia reiciendis repellat. Animi
        aspernatur deserunt earum ipsa natus neque odit quos. Autem debitis delectus deserunt mollitia totam.
        Accusamus aliquid consequatur dolor, doloremque doloribus, error et expedita explicabo ipsa libero, minus
        molestiae mollitia nihil officiis quaerat quam quas ratione voluptas voluptatibus.
      </p>
      <div className="redirectSignIUp">
        <span>Don't have an account yet? Register now</span> {/* add "Register now" as <NavLink>*/}
        <button onClick={()=> history.push('/SignUp')}>
          Register (Sign Up)
        </button>
      </div>
    </>
  )
};

export default SignIn;
