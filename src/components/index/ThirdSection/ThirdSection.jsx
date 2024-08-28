import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./ThirdSection.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThirdSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="third-index">
      <div className="third-index__wrap">
        <div className="third-index__title">
          <span data-aos="fade-up">CONTENT</span>
        </div>
        <div
          className="third-index__content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="third-index__content__left"></div>
          <div className="third-index__content__right">
            <div className="left-wrap">
              <div className="left-wrap__text">
                <h1>
                  77페스티벌
                  <br /> 웹소설 공모전
                </h1>
                <p>
                  웹소설의 기원, 조아라! <br />
                  "55만종 이상의 소설, 800만편의 연재" <br />
                  신인, 기성작가 상관없이 누구나 신청 가능한 <br />
                  조아라만의 웹소설 공모전이 개최됩니다.
                  <br />
                  자신의 상상력을 발휘하여 자유롭게 도전해보세요. <br />
                </p>
              </div>
              {/* <v-btn class="sample-btn">
                            sample
                            <v-icon large>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
