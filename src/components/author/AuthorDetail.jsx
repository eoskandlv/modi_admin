/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 작품등록   
┣ @작성: 이수정, 2024-08-31                        
┣ @내역: 이수정, 2024-08-31, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import "./AuthorSave.scss";
import { useForm, Controller } from "react-hook-form";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import Radio from "../Radio/Radio";
import RadioGroup from "../Radio/RadioGroup";
import AlertDialog from "../AlertDialog/AlertDialog";
import Btn from "../Button/Btn";

import {
  collection,
  doc,
  updateDoc,
  getFirestore,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";
import { useParams } from "react-router-dom";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AuthorDetail = ({}) => {
  // validation check
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  
  const [formData, setFormData] = useState(null);
  // 작품 저장 함수
  const { id } = useParams(); 
 const saveData = async (data) => {
   const docRef = doc(db, "product", id);

   await updateDoc(docRef, {
     name: data.useName,
     category: data.selectCategory,
     sort: data.workType,
     title: data.titleName,
     introduce: data.workDescription,
     content: data.workContents,
     comment: data.commentValue,
   });

   console.log("Document updated", data);
 };
  const onInvalid = (data) => console.log(data, "onInvalid");

  // 작품종류
  const [workType, setWorkType] = useState("COMMON");
  const handleWorkTypeChange = (value) => {
    setWorkType(value);
    setValue("workType", value);
  };

  // 카테고리
  const category = [
    { value: "fantasy", label: "판타지" },
    { value: "romance", label: "로맨스" },
    { value: "poetry", label: "시" },
    { value: "fear", label: "공포" },
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

  // 작가이름
  const [useName, setUserName] = useState("김작가");
  useEffect(() => {
    setValue("useName", useName);
  }, [setValue, useName]);

  // 다이얼로그
  const [dialogToggle, setDialogToggle] = useState(false);
  const [dialogType, setDialogType] = useState("modify"); // 'modify', 'delete'
  const [config, setConfig] = useState({
    title: "",
    titleColor: "",
    error: {
      code: 403,
      message: "not authentication",
    },
    custom: {
      icon: "mdi-check-circle-outline",
      message: "custom message",
    },
  });

  // Save 버튼 클릭 시 다이얼로그 오픈
  const handleSaveClick = (data) => {
    console.log(dialogType)
    if (dialogType == "modify") {
      setFormData(data);
      setDialogToggle(true);
    } else {
      setDialogToggle(true);
    }
  };
  const navigate = useNavigate();
  // 다이얼로그 확인 버튼 클릭 시 데이터 저장
  const handleConfirm = async () => {
    if (formData) {
      await saveData(formData);
      navigate("/author/list");
    }
    setDialogToggle(false);
  };
  // 다이얼로그 닫기
  const handleDialogClose = () => {
    setDialogToggle(false);
  };
const [authorsList, setAuthorsList] = useState([]);
  const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "product"));
  let fetchedData = [];
  let documentData = null;

  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      documentData = doc.data(); 
    }
    fetchedData.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  if (documentData) {
    setValue("titleName", documentData.title );
    setValue("workType", documentData.sort || "COMMON"); // Ensure default value
    setWorkType(documentData.sort || "COMMON");
    setValue("selectCategory",documentData.category || category[0]); 
    setValue("workDescription", documentData.introduce);
    setValue("workContents", documentData.content);
    setValue("commentValue", documentData.comment || "ALLOW");
    setCommentValue(documentData.comment || "ALLOW");
  }
};
useEffect(() => {
  fetchData();
}, [id]);
  
  useEffect(() => {
    setValue("workType", workType);
  }, [workType, setValue])

const handleDelete = async () => {
    const docRef = doc(db, "product", id);
    await deleteDoc(docRef);
    console.log("Document deleted", id);
    navigate("/author/list");
  // setDialogToggle(false);
};
  return (
    <>
      <div className="author-wrap">
        <div className="contents">
          <div className="contents-head">
            <h2>작품 상세</h2>
          </div>
          <div className="contents-body test">
            <div className="table__wrap">
              <form onSubmit={handleSubmit(handleSaveClick, onInvalid)}>
                <table className="contents-table table-style-01">
                  <colgroup>
                    <col width="20%" />
                    <col width="*" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>이름</td>
                      <td>
                        <div className="table-group">
                          <input
                            className="table-group__input"
                            disabled
                            {...register("useName", { required: true })}
                            value={useName}
                          />
                        </div>
                      </td>
                    </tr>
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
                        <Controller
                          name="selectCategory"
                          control={control}
                          defaultValue={category[0]}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={category}
                              onChange={(selectedOption) => {
                                field.onChange(selectedOption);
                              }}
                            />
                          )}
                        />
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
                  <Btn
                    type="submit"
                    colorType="delete"
                    onClick={() => setDialogType("delete")}
                  />
                  <Btn
                    type="submit"
                    colorType="modify"
                    onClick={() => setDialogType("modify")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog
        type={dialogType}
        dialogToggle={dialogToggle}
        config={config}
        onClose={handleDialogClose}
        onConfirmModify={handleConfirm}
        onConfirmDelete={handleDelete}
      />
    </>
  );
};
export default AuthorDetail;
