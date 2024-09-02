import "./MainButton.scss"
/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 메인 버튼 컴포넌트   
┣ @작성: 이수정, 2024-08-30                        
┣ @내역: 이수정, 2024-08-30, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/
const MainButton = ({ onClick }) => {
  return (
    <button className="button" data-aos="fade-up" onClick={onClick}>
      LET`S GO
    </button>
  );
};
export default MainButton;