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
import AlertDialog from "../AlertDialog/AlertDialog";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/reducers";

const HomeBar = () => {
  const activeStyle = {
    background: "white",
    color: "#98bb45",
  };
  const loginActiveStyle = {
    background: "white",
    color: "#162cac",
  };
  // path 이동
  const { pathname } = useLocation();
  // 페이지 이동
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  // 상세 이동
  const isDetailPage = useMatch("/author/detail/:id");
  // 이름
  const user = useSelector((state) => state.auth.user);
  // 다이얼로그
  const [dialogToggle, setDialogToggle] = useState(false);
  const [dialogType, setDialogType] = useState("customMessage"); // 'save','modify', 'delete'
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
  // 다이얼로그 닫기
  const handleDialogClose = () => {
    setDialogToggle(false);
  };
  // 다이얼로그 열기
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

  // 로그아웃
  const handleLogOutClick = () => {
    dispatch(logoutSuccess());
    navigate("/");
    window.location.reload();
  };

  // 로그인,로그아웃에 따라 author 분리
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
          <Link
            className="homebar-wrap__item"
            to={"/"}
            style={{ textDecoration: "none" }}
          >
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
            className="homebar-wrap__item"
            style={{ textDecoration: "none" }}
          >
            <div className="homebar-wrap__novel">
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
          {user === null ? (
            <Link
              className="homebar-wrap__item"
              to={"/login"}
              style={{ textDecoration: "none" }}
            >
              <div className="login-btn">
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
