import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./SecondSection.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const SecondSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  
  return (
    <div className="second-index">
      <div className="second-index__wrap">
        <div
          className="second-index__content"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="second-index__content__left">
            <div className="left-wrap">
              <div className="left-wrap__text">
                <h1>띠링, 연재가 도착했습니다</h1>
                <p>
                  다양한 세계관, 장르소설 그리고 서브컬쳐 패러디까지!
                  <br />
                  조아라 모바일 앱으로도 웹소설을 편하게 즐기실 수 있어요
                </p>
              </div>
            </div>
          </div>
          <div className="second-index__content__right">
            <img src="https://eoskandlv.github.io/images/app/app_01.png" />
            <img src="https://eoskandlv.github.io/images/app/app_02.png" />
            <img src="https://eoskandlv.github.io/images/app/app_03.png" />
          </div>
        </div>
        <div
          className="second-index__content"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="second-index__content__left">
            <div className="left-wrap">
              <div className="left-wrap__text">
                <h1>뷰어 TTS, 텍스트 음성 변환</h1>
                <p>
                  작가·독자의 보이스를 중심으로 필요한 변화를 선별하여 완전하게
                  새 단장 했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="second-index__content__right">
            <img src="https://eoskandlv.github.io/images/app/voice_01.png" />
            <img src="https://eoskandlv.github.io/images/app/voice_02.png" />
            <img src="https://eoskandlv.github.io/images/app/voice_03.png" />
          </div>
        </div>
        <div
          className="second-index__content"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="second-index__content__left">
            <div className="left-wrap">
              <div className="left-wrap__text">
                <h1>새로워진 사용 친화적 업데이트</h1>
                <p>
                  홈페이지·아이템샵 오픈, 프리미엄 선물함과 무료 이벤트, 작품
                  상세 페이지 개선
                  <br />
                  그리고 더욱 스마트해진 뷰어로 편하게 조아라를 이용하세요.
                </p>
              </div>
            </div>
          </div>
          <div className="second-index__content__right">
            <img src="https://eoskandlv.github.io/images/app/update_01.png" />
            <img src="https://eoskandlv.github.io/images/app/update_02.png" />
            <img src="https://eoskandlv.github.io/images/app/update_03.png" />
          </div>
        </div>
        <div className="second-index__text">
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
          <span>GO TO THE NEXT PAGE FOR ENJOY&nbsp;</span>
        </div>
      </div>
    </div>
  );
};
export default SecondSection;
