import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/authslice";
import classes from "./AuthenticationForm.module.css";

function AuthenticationForm() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [isLoginPage, setLoginPage] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setLoginPage((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJFMahUWIQ03LyF2-pxB0KQQ87yAHUFBk";
    if (isLoginPage) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJFMahUWIQ03LyF2-pxB0KQQ87yAHUFBk";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res
            .json()
            .then((data) => {
              //error
              let error = "Authentication Failed!!!";
              if (data && data.error && data.error.message) {
                error = data.error.message;
              }
              throw new Error(error);
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      })
      .then((data) => {
        localStorage.setItem("uid", data.localId);
        localStorage.setItem("idToken", data.idToken);
        dispatch(authActions.login({ uid: data.localId, token: data.idToken }));
        history("/menu");
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLoginPage ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <button>{isLoginPage ? "Login" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLoginPage ? "Create new account" : "existing user?"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthenticationForm;
