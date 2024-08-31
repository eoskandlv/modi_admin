/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 홈 메뉴바
┣ @작성: 이수정, 2024-08-29                     
┣ @내역: 이수정, 2024-08-29, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./Nav.scss"
import { FaPenNib } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaBookTanakh } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";
import Author from "../../pages/Author";
import AlertDialog from "../AlertDialog/AlertDialog";
import React, { useState, useEffect } from "react";


const HomeBar = () => {
  const activeStyle = {
    background: "white",
    color: "#98bb45",
  };
  const loginActiveStyle = {
    background: "white",
    color: "#162cac",
  };
  const { pathname } = useLocation();
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

  const handleDialogClose = () => {
    setDialogToggle(false);
  };

  const handleConfirm = (type) => {
    // 예를 들어 'save', 'modify' 등의 타입에 따른 동작을 처리
    console.log(`${type} 확인 버튼이 클릭되었습니다.`);
	  handleDialogClose(); // 다이얼로그 닫기
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
  return (
    <>
      <div className="homebar">
        <div className="homebar-wrap">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="homebar-wrap__logo">JOARA</div>
          </Link>
          <Link to={"/author"} style={{ textDecoration: "none" }}>
            <div className="homebar-wrap__item">
              <div
                className="homebar-wrap__menu"
                style={pathname === "/author" ? activeStyle : {}}
              >
                <div className="homebar-wrap__icon">
                  <FaPenNib className="icon" size="20" />
                  Author
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"/novel"}
            onClick={() =>
              showCustomMessageDialog("Novel section is coming soon!")
            }
            // onClick={() => setDialogToggle(true)}
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
            onClick={() => showCustomMessageDialog("Comix section is coming soon!")}
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
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <div className="homebar-wrap__item login-btn">
              <div
                className="homebar-wrap__menu"
                style={pathname === "/login" ? loginActiveStyle : {}}
              >
                <div className="homebar-wrap__icon">
                  <IoIosLock className="icon" size="20" />
                  Login
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <AlertDialog
        type={dialogType}
        dialogToggle={dialogToggle}
        config={config}
        onClose={handleDialogClose} // 다이얼로그 닫기 핸들러
        onConfirm={handleConfirm} // 다이얼로그 확인 버튼 클릭 핸들러
      />
    </>
  );
};

export default HomeBar;
