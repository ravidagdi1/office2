import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loadingToggleAction,
  loginAction,
} from "../../store/actions/AuthActions";

// image
import headerLogo from "../../images/header_logo.jpeg";
import loginbg from "../../images/bg-login.jpg";
import storeImg from "../../images/storeImg.jpg";

function Login(props) {
 useEffect(() => {
  document.body.classList.remove("dark-mode");
}, []);
  const [email, setEmail] = useState("");
  let errorsObj = { email: "", password: "" };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();

  function onLogin(e) {
    e.preventDefault();
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, nav));
  }

  return (
    <div className="login-main-page" style={{ backgroundImage: "#fff" }}>
      <div className="login-wrapper">
        <div className="login-aside-left">
          {/* <Link to="/dashboard" className="login-logo"></Link> */}

          <div className="login-description">
            <div className="text-center">
              <img
                src={headerLogo}
                alt="headerLogo"
                style={{ width: "120px", height: "auto" }}
              />
            </div>
            <h4 className="">Store Management</h4>
            <img
              src={storeImg}
              alt="storeImg"
              className="login-image123"
            />
          </div>
        </div>
        <div className="login-aside-right">
          <div className="row g-0 justify-content-center align-items-center">
            <div className="col-12 p-3">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form-1">
                      <div className="mb-4">
                        <h3 className="dz-title mb-1">Sign in</h3>
                        <p className="">
                          Sign in by entering information below
                        </p>
                      </div>
                      {props.errorMessage && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                          {props.successMessage}
                        </div>
                      )}
                      <form onSubmit={onLogin}>
                        <div className="form-group">
                          <label className="mb-2 ">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Type Your Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-2">
                            <strong>Password</strong>
                          </label>

                          <div className="input-wrapper">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control custom-input"
                              value={password}
                              placeholder="Type your password"
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            <span
                              className="toggle-password"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </span>
                          </div>
                        </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="form-check custom-checkbox ml-1 ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="basic_checkbox_1"
                              >
                                Remember my preference
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-2">
                        <h4 className="text-center">Copyright © Indigo InfraProjects Pvt. Ltd.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);