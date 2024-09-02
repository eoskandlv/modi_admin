import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./FourthSection.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowBack } from "react-icons/io";
import MainButton from "../../Button/MainButton"


const FourthSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="fourth-index">
      <div className="fourth-index__wrap">
        <div className="fourth-index__text">
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
          <p>
            <span>JOARA</span> : NOVEL·COMIX·EVENT&nbsp;
          </p>
        </div>
        <div className="fourth-index__title">
          <p data-aos="fade-up">
            트렌디 인기 신작, 연재, 완결, BL, 만화, 소설까지
            <br />
            다양한 작품을 조아라 한 곳에서 즐기세요.
            <br />
            <span>스토리 본능</span>을 깨우다.
          </p>
        </div>
        <div className="fourth-index__bike" data-aos="fade-left">
          <img src="/images/book.png" />
        </div>
        <div className="fourth-index__bottom">
          <div className="fourth-index__bottom__content">
            <h1 data-aos="fade-up">지금 바로 조아라와 함께해 보세요!</h1>
            <p data-aos="fade-up">
              웹소설의 시작 조아라에서 매일 업데이트 되는 무료 웹소설과 웹툰을
              취향에 맞게 즐겨보세요.
            </p>
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourthSection;
