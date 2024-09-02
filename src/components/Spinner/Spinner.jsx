/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 로딩바
┣ @작성: 이수정, 2024-09-02                     
┣ @내역: 이수정, 2024-09-02, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import React from "react";
import { GridLoader } from "react-spinners";
import "./Spinner.scss";

const Loading = ({ loading }) => {
  if (loading == true) {
    return (
      <div className="spinner">
        <GridLoader
          color="#ffffff"
          loading={loading}
          size={25}
          speedMultiplier={0.8}
          margin={5}
        />
      </div>
    );
  }
};

export default Loading;
