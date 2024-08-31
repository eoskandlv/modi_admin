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
					<Link to={"/novel"} style={{ textDecoration: "none" }}>
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
					<Link to={"/comix"} style={{ textDecoration: "none" }}>
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
		</>
	);
};

export default HomeBar;
