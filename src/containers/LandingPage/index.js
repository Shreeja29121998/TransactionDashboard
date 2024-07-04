import React, { useEffect, useState } from "react";
import { useInjectReducer } from "../../utils/injectReducer.js";
import { useInjectSaga } from "../../utils/injectSaga.js";
import reducer from "../reducer.js";
import saga from "../saga.js";
import { Button } from "@material-ui/core";
import Login from "../Login/index.js";
import Register from "../Login/Register.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#5783db'
  },
}));

const LandingPage = () => {
  useInjectReducer({ key: "transactions", reducer });
  useInjectSaga({ key: "transactions", saga });

  const classes = useStyles();

  const userInfo = useSelector(
    (state) => state?.transactions?.logIn?.userInformation
  );
  const accountId = useSelector(
    (state) => state?.transactions?.logIn?.accountId
  );

  const [loginOpen, setLoginOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  let navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  useEffect(() => {
    console.log(userInfo);
    if (
      userInfo?.success &&
      accountId &&
      userInfo?.user &&
      userInfo?.password
    ) {
      localStorage.setItem("user", userInfo.user);
      localStorage.setItem("SESSION", "UEHUFEFEHUF");
      handleClick();
    }
  }, [userInfo, userInfo?.success, accountId]);

  const handleOpenLogin = (val) => {
    setLoginOpen(val);
    setOpenRegister(!val);
  };

  const handleOpenRegister = (val) => {
    setOpenRegister(val);
    setLoginOpen(!val);
  };

  return (
    <>
      {loginOpen && (
        <Login openLogin={handleOpenLogin} openRegister={handleOpenRegister} />
      )}
      {openRegister && (
        <Register
          openLogin={handleOpenLogin}
          openRegister={handleOpenRegister}
        />
      )}
      {!loginOpen && !openRegister && (
        <div
          style={{
            display: "flex",
            position: "absolute",
            "flex-direction": "column",
            top: "10rem",
            "align-items": "center",
            left: "17rem",
          }}
        >
          <h1>Welcome to transactions portal</h1>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon=<SendIcon/>
            onClick={() => handleOpenLogin(true)}
          >
            Click to Proceed
          </Button>
        </div>
      )}
    </>
  );
};

export default LandingPage;
