import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logginUser, selectUser, selectUserIsLoggedIn } from "../store/authSlice";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(selectUserIsLoggedIn);
  const [enteredEmail, setEnteredEmail] = useState("");
  const submitEnteredEmail = (e) => {
    setEnteredEmail(e.target.value);
  };
  const [enteredPassword, setenteredPassword] = useState("");
  const submitEnteredPassword = (e) => {
    setenteredPassword(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    // console.log(enteredEmail, enteredPassword);
    dispatch(logginUser({ enteredEmail, enteredPassword }));
    try {
      console.log(loggedIn);
      navigate("/profil");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(enteredEmail);
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitFormHandler}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={submitEnteredEmail} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={submitEnteredPassword} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <button className="sign-in-button">Sign In</button>
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
       <button className="sign-in-button">Sign In</button> */}
        </form>
      </section>
    </main>
  );
}

export default SignIn;
