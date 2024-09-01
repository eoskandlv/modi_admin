/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 작가등록   
┣ @작성: 이수정, 2024-08-31                        
┣ @내역: 이수정, 2024-08-31, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import "./LoginForm.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Select from "react-select";
import Radio from "../Radio/Radio";
import RadioGroup from "../Radio/RadioGroup";
import SaveBtn from "../Button/Btn";

const AuthorSave = () => {
  // validation check
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  // 작품종류
  const [workType, setWorkType] = useState("COMMON");
  const handleWorkTypeChange = (value) => {
    setWorkType(value);
    setValue("workType", value);
  };

  // 카테고리
  const category = [
    { value: "a", label: "판타지" },
    { value: "b", label: "무협" },
    { value: "c", label: "로맨스" },
    { value: "d", label: "로맨스판타지" },
    { value: "e", label: "시" },
    { value: "f", label: "추리" },
    { value: "g", label: "공포" },
  ];
  const [selectCategory, setSelectCateory] = useState(category[0]);
  const handleCategoryChange = (selectedOption) => {
    setValue("selectCategory", selectedOption.value);
  };

  // 카테고리 기본값을 useForm에 설정
  useEffect(() => {
    setValue("selectCategory", selectCategory.value);
  }, [setValue, selectCategory]);

  // 코멘트
  const [commentValue, setCommentValue] = useState("ALLOW");
  const handleCommentChange = (value) => {
    setCommentValue(value);
    setValue("commentValue", value);
  };

  return (
    <>
      <div className="contents">
        <div className="contents-head">
          <h2>작품 등록</h2>
        </div>
        <div className="contents-body test">
          <div className="table__wrap">
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
              <table className="contents-table table-style-01">
                <colgroup>
                  <col width="20%" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td>작품종류</td>
                    <td>
                      <div className="radio-group">
                        <RadioGroup
                          value={workType}
                          onChange={handleWorkTypeChange}
                        >
                          <Radio value="COMMON" />
                          일반
                          <Radio value="ETUDE" />
                          습작
                        </RadioGroup>
                        <input
                          type="hidden"
                          {...register("workType", { required: true })}
                          value={workType}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>카테고리</td>
                    <td>
                      <div className="select-group ">
                        <Select
                          options={category}
                          onChange={handleCategoryChange}
                          defaultValue={category[0]}
                        />
                      </div>
                      <input
                        type="hidden"
                        {...register("selectCategory", { required: true })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      작품명<span className="essential">*</span>
                    </td>
                    <td>
                      <div className="table-group">
                        {errors.titleName &&
                          errors.titleName?.type === "required" && (
                            <span>* 작품명을 입력해주세요.</span>
                          )}
                        {errors.titleName &&
                          errors.titleName?.type === "maxLength" && (
                            <span>{errors.titleName.message}</span>
                          )}
                        <input
                          type="text"
                          className="table-group__input"
                          placeholder="작품명은 40자 이내로 작성해주세요."
                          style={{
                            borderColor: errors.titleName
                              ? "#ff0000"
                              : "#dadada",
                          }}
                          {...register("titleName", {
                            required: true,
                            maxLength: {
                              value: 40,
                              message: "* 작품명은 40자 이내로 작성해주세요.",
                            },
                            onChange: (e) => {
                              const { value } = e.target;
                              if (value.length > 40) {
                                e.target.value = value.slice(0, 40);
                              }
                            },
                          })}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      작품소개<span className="essential">*</span>
                    </td>
                    <td>
                      <div className="table-group">
                        {errors.workContents &&
                          errors.workContents?.type === "required" && (
                            <span>* 작품 줄거리를 입력하세요.</span>
                          )}
                        <textarea
                          type="text"
                          className="table-group__input table-group__textarea"
                          placeholder="작품 줄거리를 입력하세요."
                          style={{
                            borderColor: errors.workContents
                              ? "#ff0000"
                              : "#dadada",
                          }}
                          {...register("workContents", {
                            required: true,
                          })}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      작품내용<span className="essential">*</span>
                    </td>
                    <td>
                      <div className="table-group">
                        {errors.workDescription &&
                          errors.workDescription?.type === "required" && (
                            <span>* 작품 내용을 입력하세요.</span>
                          )}
                        <textarea
                          type="text"
                          className="table-group__input table-group__textarea"
                          placeholder="작품 내용을 입력하세요."
                          style={{
                            borderColor: errors.workDescription
                              ? "#ff0000"
                              : "#dadada",
                          }}
                          {...register("workDescription", {
                            required: true,
                          })}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>코멘트 허용</td>
                    <td>
                      <div className="radio-group">
                        <RadioGroup
                          value={commentValue}
                          onChange={handleCommentChange}
                        >
                          <Radio value="ALLOW" />
                          허용
                          <Radio value="REJECT" />
                          비허용
                        </RadioGroup>
                      </div>
                      <input
                        type="hidden"
                        {...register("commentValue", { required: true })}
                        value={commentValue}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="save-button">
                <SaveBtn type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorSave;
