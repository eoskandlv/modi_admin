/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 라디오 그룹 컴포넌트
┣ @작성: 이수정, 2024-08-31                     
┣ @내역: 이수정, 2024-08-31, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import { RadioContext } from "./RadioContext";
import "./RadioGroup.scss";

const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <>
      <fieldset className="radio-container">
        <legend>{label}</legend>
        <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
      </fieldset>
    </>
  );
};
export default RadioGroup;
