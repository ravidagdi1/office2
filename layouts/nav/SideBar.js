import React, { useReducer, useContext, useEffect, useState } from "react";
import adminLogo from "../../../images/admin_logo.jpg";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import { Collapse, Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { MenuList } from './Menu';
import { ThemeContext } from "../../../context/ThemeContext";
import LogoutPage from './Logout';

import { useSelector } from 'react-redux';



const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
});

const initialState = {
    active: "",
    activeSubmenu: "",
}

const SideBar = () => {
    const {
        iconHover,
        sidebarposition,
        headerposition,
        sidebarLayout,
        ChangeIconSidebar,
    } = useContext(ThemeContext);

    const [state, setState] = useReducer(reducer, initialState);
    const user = useSelector((state) => state.auth.auth.data.user);
    const userRole = user.role



    useEffect(() => {
    const btn = document.querySelector(".nav-control");
    const aaa = document.querySelector("#main-wrapper");

    const toggleFunc = () => {
        aaa.classList.toggle("menu-toggle");
    };

    btn?.addEventListener("click", toggleFunc);

    return () => {
        btn?.removeEventListener("click", toggleFunc);
    };
}, []);

    let handleheartBlast = document.querySelector('.heart');
    function heartBlast() {
        return handleheartBlast.classList.toggle("heart-blast");
    }
    const [hideOnScroll, setHideOnScroll] = useState(true)
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll]
    )


    const handleMenuActive = status => {
        setState({ active: status });
        if (state.active === status) {
            setState({ active: "" });
        }
    }
    const handleSubmenuActive = (status) => {
        setState({ activeSubmenu: status })
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" })
        }
    }

    //let scrollPosition = useScrollPosition();
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    /// Active menu
    const hasAccess = (roles) => {
        // Ensure roles is an array and userRole is a string
        return Array.isArray(roles) && typeof userRole === 'string' && roles.includes(userRole);
    };


    return (
        <div
            onMouseEnter={() => ChangeIconSidebar(true)}
            onMouseLeave={() => ChangeIconSidebar(false)}
            className={`dlabnav ${iconHover} ${sidebarposition.value === "fixed" &&
                sidebarLayout.value === "horizontal" &&
                headerposition.value === "static"
                ? hideOnScroll > 120
                    ? "fixed"
                    : ""
                : ""
                }`}
        >
            <PerfectScrollbar className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <Dropdown as="li" className="nav-item dropdown header-profile">
                        <Dropdown.Toggle
                            variant=""
                            as="a"
                            className="nav-link i-false c-pointer"
                            role="button"
                            data-toggle=" dropdown"
                        >
                            <img src={adminLogo} width={20} alt="" />
                            <div className="header-info ms-3">
                                <span className="font-w600 ">Hi,<b>{user?.name}</b></span>
                                <small className="font-w400 mt-1">Email: {user?.email}</small>
                                <small className="font-w400 mt-1">
                                    Role: <b>{user?.role?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</b>
                                </small>

                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right" className="mt-2 dropdown-menu dropdown-menu-end">
                            <Link to="/app-profile" className="dropdown-item ai-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-info"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span className="ms-2">Profile</span>
                            </Link>

                            <Link to="/app-change-Password" className="dropdown-item ai-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-primary"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="7.5" cy="15.5" r="5.5"></circle>
                                    <path d="M21 2l-9.6 9.6"></path>
                                    <path d="M15.5 7.5l3 3"></path>
                                </svg>
                                <span className="ms-2">Change Password</span>
                            </Link>
                            <Link to="/app-change-Password-otp" className="dropdown-item ai-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-success"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="4" y1="9" x2="20" y2="9"></line>
                                    <line x1="4" y1="15" x2="20" y2="15"></line>
                                    <line x1="10" y1="3" x2="8" y2="21"></line>
                                    <line x1="16" y1="3" x2="14" y2="21"></line>
                                </svg>
                                <span className="ms-2">Password Change By OTP</span>
                            </Link>


                            <LogoutPage />
                        </Dropdown.Menu>
                    </Dropdown>

                    {MenuList.filter(menu => hasAccess(menu.roles)).map((data, index) => {
                        return (
                            <li className={` ${state.active === data?.title ? 'mm-active' : ''}`} key={index}>
                                {data.content && data.content.length > 0 ? (
                                    <>
                                        <Link to={"#"} className="has-arrow" onClick={() => { handleMenuActive(data?.title) }}>
                                            {data.iconStyle}
                                            <span className="nav-text">{data?.title}</span>
                                        </Link>
                                        <Collapse in={state.active === data?.title ? true : false}>
                                            <ul>
                                                {data.content.map((subMenu, subIndex) => (
                                                    hasAccess(subMenu.roles) && (
                                                        <Link key={subIndex} to={subMenu.to}>
                                                            {subMenu.title}
                                                        </Link>
                                                    )
                                                ))}

                                            </ul>
                                        </Collapse>
                                    </>
                                ) : (
                                    <Link to={data.to}>
                                        {data.iconStyle}
                                        <span className="nav-text">{data.title}</span>
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
                <div className="copyright">
                    <p><strong>Indigo InfraProjects Pvt. Ltd</strong> © 2024 All Rights Reserved</p>
                </div>
            </PerfectScrollbar>
        </div>
    );
};

export default SideBar;
