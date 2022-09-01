import React from "react";
import "./Login.css";

const Login = () => {


  return (
    <>
        <h2 className="login">Login </h2>
      <form action="" onSubmit={handlesubmit}>
        <span className="error-block">{error}</span>
        <br />
        <label className="form-label" htmlFor="">
          Username
        </label>
        <input

          type="text"
          className="form-control"
          name=""
          id=""
        />

        <label className="form-label" htmlFor="">
          Password
        </label>
        <input
 
          type="text"
          className="form-control"
          name=""
          id=""
        />
        <button type="submit" className="form-control btn btn-primary my-2">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;