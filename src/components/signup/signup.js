import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [userlist, setUserlist] = useState([]);
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmpass: "",
  });
  const toLogin = useNavigate();
  const getData = (e) => {
    const { value, name } = e.target;
    setDetails(() => {
      return {
        ...details,
        [name]: value,
      };
    });
  };
  const submitDetails = (e) => {
    e.preventDefault();
    const { email, password, confirmpass } = details;
    console.log(details);
    if (email.length === 0) {
      alert("Enter valid email input");
    } else if (!email.includes("@")) {
      alert("Enter valid email input");
    } else if (password.length <= 6) {
      alert("Enter valid password input");
    } else if (confirmpass.length <= 6) {
      alert("Enter password again");
    } else if (confirmpass !== password) {
      alert("Passwords doesn't match");
    } else {
      localStorage.setItem("Users", JSON.stringify([...userlist, details]));
      const tempobj = {
        email: details.email,
        password: details.password,
      };
      const tempa = [...userlist, tempobj];
      setUserlist(tempa);
      toLogin("/login");
      console.log(userlist);
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h2 className="pgtitle">Fill up the details</h2>
            <div>
              <input
                type="email"
                onChange={getData}
                name="email"
                placeholder="email"
                className="name"
              />
            </div>
            <div className="second-input">
              <input
                type="password"
                onChange={getData}
                name="password"
                placeholder="password"
                className="name"
              />
            </div>
            <div className="third-input">
              <input
                type="password"
                onChange={getData}
                name="confirmpass"
                placeholder="Confirm password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button type="button" onClick={submitDetails}>
                Signup
              </button>
            </div>

            <p className="Link">
              Already a user? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
