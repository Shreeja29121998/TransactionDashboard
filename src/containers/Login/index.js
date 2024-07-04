import { useRef, useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInInitiated } from "../action.js";
import { Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff'
  },
}));
const Login = ({ openLogin, openRegister }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [dispatch]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSignUpClick = (val) => {
    openRegister(val);
    openLogin(!val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      logInInitiated({
        username: user,
        password: pwd,
      })
    );
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
        <p>
          <span className="line">
            <Link
              component="button"
              variant="body2"
              className={classes.button}
              onClick={() => {
                handleSignUpClick(true);
              }}
            >
              Sign Up
            </Link>{" "}
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
