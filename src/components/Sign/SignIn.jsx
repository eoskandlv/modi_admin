/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 로그인   
┣ @작성: 이수정, 2024-09-01                        
┣ @내역: 이수정, 2024-09-01, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/

import "./SignStyle.scss";
import { useForm } from "react-hook-form";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { signIn } from "../../redux/actions";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../redux/actions"; 
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/reducers";


const SignIn = () => {
  // validation check
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 함수
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(signIn(data.loginId, data.loginPassword));
      if (response && response.type === LOGIN_SUCCESS) {
        dispatch(loginSuccess(response));
        alert("로그인이 완료되었습니다.");
        navigate("/");
      } else if (response && response.type === LOGIN_FAILURE) {
        dispatch(loginFailure(response));
        alert("로그인 실패: " + response.payload);
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailure({ message: error.message }));
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="ID"
            style={{
              borderColor: errors.loginId ? "#ff0000" : "#dadada",
            }}
            {...register("loginId", {
              required: true,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: "유효한 이메일 주소를 입력하세요.",
              },
            })}
          />
          {errors.loginId && errors.loginId?.type === "required" && (
            <span>아이디를 입력하세요.</span>
          )}
          {errors.loginId && <span>{errors.loginId.message}</span>}

          <input
            type="password"
            placeholder="Password"
            style={{
              borderColor: errors.loginPassword ? "#ff0000" : "#dadada",
            }}
            {...register("loginPassword", {
              required: true,
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상입니다.",
              },
            })}
          />
          {errors.loginPassword &&
            errors.loginPassword?.type === "required" && (
              <span>비밀번호를 입력하세요.</span>
            )}
          {errors.loginPassword &&
            errors.loginPassword?.type === "minLength" && (
              <span>{errors.loginPassword.message}</span>
            )}
          <input className="btn" type="submit" value="Log in" />
          <Link to={"/signup"}>sign up?</Link>
        </form>
      </div>
    </>
  );
};
export default SignIn;
