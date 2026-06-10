import React, { Fragment, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { navtoggle } from "../../../store/actions/AuthActions";
import header_logo from '../../../images/header_logo.jpeg'

const NavHader = () => {
  const { navigationHader, openMenuToggle, background } =
    useContext(ThemeContext);
  const dispatch = useDispatch();
  const sideMenu = useSelector((state) => state.sideMenu);
  const handleToogle = () => {
    dispatch(navtoggle());
  };
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
           <>
           <img src={header_logo} alt='' style={{width:'90px',borderRadius:'3px'}} />
           <strong className="brand-title" style={{fontSize:"12px",color:'white'}}>Store Management</strong>
           </>
        ) : (
          <>
        <img src={header_logo} alt='' style={{width:'90px', borderRadius:'3px'}} />
        <strong className="brand-title" style={{fontSize:"12px",color:'rgb(25, 59, 98)'}}>Store Management</strong>
        </>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          // setToggle(!toggle);
          openMenuToggle();
          handleToogle();
        }}
      >
        <div className={`hamburger ${sideMenu ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
