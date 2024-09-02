/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 작품목록   
┣ @작성: 이수정, 2024-08-31                        
┣ @내역: 이수정, 2024-08-31, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import "./AuthorList.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Btn from "../Button/Btn";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";

const app = initializeApp(firebaseConfig);

const AuthorList = () => {
   const [authorsList, setAuthorsList] = useState([]);
   const [tableStatus, setTableStatus] = useState("loading");

   const fetchData = async () => {
     const db = getFirestore(app);
     const querySnapshot = await getDocs(collection(db, "product"));
     querySnapshot.forEach((doc) => {
      //  console.log(doc.data());
     });
     const fetchedData = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
     if (fetchedData.length == 0) {
       setTableStatus("empty");
     } else {
       setTableStatus("loading");
       setTableStatus("ok");
     }
     setAuthorsList(fetchedData);
   };

  useEffect(() => {
     fetchData();
   }, []);
  
  const navigate = useNavigate();  
  const onClickButton = () => {
    navigate("/author");
  };
  const itemClick = (id) => {
    authorsList.forEach(data => {
      if (data.id == id) {
        navigate(`/author/detail/${id}`);
      }
    })
  }

  return (
    <>
      <div className="author-wrap">
        <div className="contents">
          <div className="contents-head">
            <h2>작품 목록</h2>
          </div>
          <div className="contents-body test">
            <div className="table__wrap">
              <table className="contents-table">
                <colgroup>
                  <col width="*" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>이름</th>
                    <th>작품종류</th>
                    <th>카테고리</th>
                    <th>코멘트</th>
                  </tr>
                </thead>
                <tbody>
                  {tableStatus === "empty" && (
                    <tr className="table-basic__empty">
                      <td colSpan="6">
                        <div>
                          <h3>등록된 데이터가 없습니다.</h3>
                        </div>
                      </td>
                    </tr>
                  )}

                  {tableStatus === "loading" && (
                    <tr className="table-basic__loading">
                      <td colSpan="6">
                        <div className="progress">
                          <div className="loading"></div>
                          <p>데이터를 불러오는 중입니다.</p>
                        </div>
                      </td>
                    </tr>
                  )}

                  {tableStatus === "ok" &&
                    authorsList.map((data, key) => (
                      <tr key={key}>
                        <td className="text-center">
                          <a onClick={() => itemClick(data.id)}>{data.title}</a>
                        </td>
                        <td className="text-center">{data.name}</td>
                        <td className="text-center">
                          {data.sort == "COMMON" ? "일반" : "습작"}
                        </td>
                        <td className="text-center">{data.category.label}</td>
                        <td className="text-center">
                          {data.comment == "ALLOW" ? "허용" : "비허용"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="save-button" onClick={onClickButton}>
              <Btn colorType="save" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorList;
