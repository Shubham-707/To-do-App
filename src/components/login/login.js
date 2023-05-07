import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const data = JSON.parse(localStorage.getItem("Users"));
  const [userdetails, setuserdetails] = useState({
    email: "",
    password: "",
  });
  const toPost = useNavigate();
  const getData = (e) => {
    const { value, name } = e.target;
    setuserdetails(() => {
      return {
        ...userdetails,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    console.log(data);
    const { email, password } = userdetails;
    if (email.length === 0) {
      alert("Enter valid email input");
    } else if (!email.includes("@")) {
      alert("Enter valid email input");
    } else if (password.length <= 6) {
      alert("Enter valid password input");
    } else {
      let newarr = data?.filter((item) => {
        return item.email === email && item.password === password;
      });
      console.log(newarr);
      if (newarr.length === 0) {
        alert("Invalid Credentials");
      } else {
        toPost("/post");
      }
    }
  };
  return (
    <div className="mainlogin">
      <div className="sub-mainlogin">
        <div>
          <div>
            <h2 className="pgtitlelogin">Fill your details</h2>
            <div>
              <input
                type="text"
                name="email"
                onChange={getData}
                placeholder="email"
                className="namelogin"
              />
            </div>
            <div className="second-inputlogin">
              <input
                type="password"
                name="password"
                onChange={getData}
                placeholder="Password"
                className="namelogin"
              />
            </div>
            <div className="login-buttonlogin">
              <button type="button" onClick={handleClick}>
                Login
              </button>
            </div>
            <p className="linktosingup">
              Do not have an account ? <Link to="/">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
