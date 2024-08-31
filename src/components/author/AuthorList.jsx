/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 작가등록   
┣ @작성: 이수정, 2024-08-31                        
┣ @내역: 이수정, 2024-08-31, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import "./AuthorSave.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Select from "react-select";
import Radio from "../Radio/Radio";
import RadioGroup from "../Radio/RadioGroup";
import SaveBtn from "../Button/SaveBtn/SaveBtn";

const AuthorList = ({ dummyList }) => {
    console.log(dummyList);
  return (
    <>
      <div className="contents">
        <div className="contents-head">
          <h2>작품 목록</h2>
        </div>
        <div className="contents-body test">
          <div className="table__wrap">
            <table className="contents-table">
              <colgroup>
                <col width="10%" />
                <col width="*" />
                <col width="15%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>카테고리</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-show="tableStatus =='loading'"
                  className="contents-table__loading"
                >
                  <td colSpan="5">
                    <p>데이터를 불러오는 중입니다.</p>
                  </td>
                </tr>
                <tr
                  v-show="tableStatus == 'empty'"
                  className="contents-table__empty"
                >
                  <td colSpan="5">
                    <div>
                      <v-icon color="#000" large>
                        mdi-alert-circle-outline
                      </v-icon>
                      <h4>등록된 게시물이 없습니다.</h4>
                    </div>
                  </td>
                </tr>
                {/* <tr v-show="tableStatus == 'error'" class="contents-table__error">
                            <td colspan="5">
                                <div>
                                    <v-icon color="#000" large>mdi-alert-circle-outline</v-icon>
                                    <h4>데이터 로드에 실패하였습니다. <br>잠시후에 다시 시도해주세요.</h4>
                                </div>
                            </td>
                        </tr> */}
                {/* <tr v-for="(item, index) in tableItems" :key="index" v-show="tableStatus == 'ok'">
                            <td class="text-center">{{ item.rowNum }}</td>
                            <td>
                                    <!-- @click="$router.push('/notice/detail/' + item.seq)" -->
                                <div 
                                    @click="tableTdClick(item.seq)"
                                    class="text-title"
                                >
                                    {{ item.title }}
                                </div>
                            </td>
                            <td class="text-center">{{ item.empName }}</td>
                            <td class="text-center">{{ dbDateTimeFormatting(item.updateAt) }}</td>
                        </tr> */}
                {dummyList.map((data) => (
                  <tr key={data.id}>
                    <td className="text-center">{data.emotion}</td>
                    <td className="text-center">{data.content}</td>
                    <td className="text-center">{data.author}</td>
                    <td className="text-center">{data.created_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorList;
