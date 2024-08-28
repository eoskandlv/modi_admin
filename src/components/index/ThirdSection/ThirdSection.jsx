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
                  원하는 컨텐츠를
                  <br /> 표시할 수 있습니다.
                </h1>
                <p>
                  지도 위에 HTML로 구현 가능한 모든 컨텐츠를 <br />
                  올릴수 있습니다. CSS를 이용하여 자유롭게 <br />
                  꾸며보세요.
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
