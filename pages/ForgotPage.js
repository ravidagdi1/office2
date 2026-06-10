import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import AdminServices from "../../services/AdminServices";

const ChangePasswordByOtp = () => {
  const [open2, setOpen2] = useState(true);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Step 1: Request OTP
  const handleSendOtp = async () => {
    if (!mobile) {
      Swal.fire("Error", "Please enter mobile number", "error");
      return;
    }
    try {
      const response = await AdminServices.sendPasswordOtp({ mobile });
      if (response.status === "success") {
        Swal.fire("Success", "OTP sent to your registered email!", "success");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message, "error");
    }
  };

  // Step 2: Verify OTP and Change Password
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobile || !otp || !password || !confirmPassword) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }

    try {
      const response = await AdminServices.resetPasswordByOtp({
        mobile,
        otp,
        password,
        passwordConfirm: confirmPassword,
      });

      if (response.status === "success") {
        Swal.fire("Success", "Password changed successfully!", "success");
        setMobile("");
        setOtp("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message, "error");
    }
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="filter cm-content-box box-primary mt-1">
          <div className="content-title">
            <div className="cpa">
              <i className="fa fa-user-plus me-2" aria-hidden="true"></i>
              Change Password By OTP
            </div>
            <div className="tools">
              <Link
                to="#"
                className={`SlideToolHeader ${open2 ? "collapse" : "expand"}`}
                onClick={() => setOpen2(!open2)}
              >
                <i className="fas fa-angle-up"></i>
              </Link>
            </div>
          </div>
          <Collapse in={open2}>
            <div className="cm-content-body form excerpt">
              <div className="card-body">
                <div className="table-responsive">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group mb-3 col-md-6">
                        <label>Mobile No</label>
                        <input
                          type="number"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Enter your registered mobile number"
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>OTP</label>
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control me-2"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            autoComplete="off"
                          />
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={handleSendOtp}
                          >Send OTP
                          </button>


                        </div>
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="New Password"
                          autoComplete="off"
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button type="submit" className="btn btn-primary me-2">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        setMobile("");
                        setOtp("");
                        setPassword("");
                        setConfirmPassword("");
                        setError("");
                      }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordByOtp;
