import { FaStar } from "react-icons/fa";
import "./MainSection.scss";

const MainSection = () => {
  return (
    <div className="main-head">
      <div className="main-head__wrap">
        <div className="main-head__left">
          <div className="title">
            <div className="title__item">
              <span >JOARA,</span>
              <span>WEB</span>
              <span>PLATFORM</span>
            </div>
            <div className="progress-bar"></div>
            <div className="title__text">
              <span>심심한데 뭐하지? 재밌는 거 뭐 읽지?</span>
              <span>일상의 빈 공간을 메워줄 재미! 알 사람은 다 알죠,</span>
              <span>웹소설의 기원, 조아라!</span>
            </div>
          </div>
        </div>
        <div className="background-icon">
          <div className="background-icon__top">
            <FaStar
              color="#fff"
              className="background-icon__item"
              size="50"
            />
            <FaStar
              color="#fff"
              className="background-icon__item"
              size="50"
            />
            <FaStar
              color="#fff"
              className="background-icon__item"
              size="50"
            />
            <FaStar
              color="#fff"
              className="background-icon__item"
              size="50"
            />
            <FaStar
              color="#fff"
              className="background-icon__item"
              size="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
