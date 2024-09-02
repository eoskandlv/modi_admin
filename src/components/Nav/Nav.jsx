/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 홈 메뉴바
┣ @작성: 이수정, 2024-08-29                     
┣ @내역: 이수정, 2024-08-29, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import "./Nav.scss"
import { FaPenNib } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoIosUnlock } from "react-icons/io";
import { FaBookTanakh } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";
import Author from "../../pages/Author";
import AlertDialog from "../AlertDialog/AlertDialog";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/reducers";

const HomeBar = () => {
const user = useSelector((state) => state.auth.user);
  const activeStyle = {
    background: "white",
    color: "#98bb45",
  };
  const loginActiveStyle = {
    background: "white",
    color: "#162cac",
  };
  const { pathname } = useLocation();
  const isDetailPage = useMatch("/author/detail/:id");
  const [dialogToggle, setDialogToggle] = useState(false);
  const [dialogType, setDialogType] = useState("customMessage"); // 또는 'modify', 'delete' 등 필요한 타입
  const [config, setConfig] = useState({
    title: "",
    titleColor: "",
    error: {
      code: 403,
      message: "not authentication",
    },
    custom: {
      icon: "mdi-check-circle-outline",
      message: "custom message",
    },
  });
  const dispatch = useDispatch();

  const handleDialogClose = () => {
    setDialogToggle(false);
  };

  const handleConfirm = () => {
    handleDialogClose();
  };

  // Custom Message 설정 함수
  const showCustomMessageDialog = (message) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      custom: {
        ...prevConfig.custom,
        message: message,
      },
    }));
    setDialogToggle(true);
  };

  const navigate = useNavigate();
  const handleLogOutClick = () => {
    dispatch(logoutSuccess());
    navigate("/");
    window.location.reload()
  };

  const handleAuthorClick = () => {
    if (user === null) {
      showCustomMessageDialog("로그인 후 이용해주세요.");
    } else {
      navigate("/author");
    }
  };
  return (
    <>
      <div className="homebar">
        <div className="homebar-wrap">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="homebar-wrap__logo">JOARA</div>
          </Link>
            <div className="homebar-wrap__item" onClick={handleAuthorClick}>
              <div
                className="homebar-wrap__menu"
                style={
                  pathname === "/author" ||
                  pathname === "/author/list" ||
                  isDetailPage
                    ? activeStyle
                    : {}
                }
              >
                <div className="homebar-wrap__icon">
                  <FaPenNib className="icon" size="20" />
                  Author
                </div>
              </div>
            </div>
          <Link
            to={"/novel"}
            onClick={() =>
              showCustomMessageDialog("Novel section is coming soon!")
            }
            style={{ textDecoration: "none" }}
          >
            <div className="homebar-wrap__item">
              <div
                className="homebar-wrap__menu"
                style={pathname === "/novel" ? activeStyle : {}}
              >
                <div className="homebar-wrap__icon">
                  <FaBookTanakh className="icon" size="20" />
                  Novel
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"/comix"}
            // onClick={() => setDialogToggle(true)}
            onClick={() =>
              showCustomMessageDialog("Comix section is coming soon!")
            }
            style={{ textDecoration: "none" }}
          >
            <div className="homebar-wrap__item">
              <div
                className="homebar-wrap__menu"
                style={pathname === "/comix" ? activeStyle : {}}
              >
                <div className="homebar-wrap__icon">
                  <FaBookQuran className="icon" size="20" />
                  Comix
                </div>
              </div>
            </div>
          </Link>
          {user === null ? (
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <div className="homebar-wrap__item login-btn">
                <div
                  className="homebar-wrap__menu"
                  style={
                    pathname === "/login" || pathname === "/signup"
                      ? loginActiveStyle
                      : {}
                  }
                >
                  <div className="homebar-wrap__icon">
                    <IoIosLock className="icon" size="20" />
                    Login
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="homebar-wrap__item login-btn">
              <div className="homebar-wrap__menu" onClick={handleLogOutClick}>
                <div className="homebar-wrap__icon">
                  <IoIosUnlock className="icon" size="20" />
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AlertDialog
        type={dialogType}
        dialogToggle={dialogToggle}
        config={config}
        onClose={handleDialogClose}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default HomeBar;
