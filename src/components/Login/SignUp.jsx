import "./LoginStyle.scss";
import { useForm } from "react-hook-form";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions";
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../../redux/actions"; 
import { signUpSuccess, signUpFailure } from "../../redux/reducers";

const SignUp = () => {
  // validation check
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state);

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(
        signUp(data.emailId, data.password, data.userName, data.nickname)
      );
      if (response && response.type === SIGN_UP_SUCCESS) {
        dispatch(signUpSuccess(response));
        alert("회원가입을 축하드립니다.");
        navigate("/");
      } else if (response && response.type === SIGN_UP_FAILURE) {
        alert(response.payload);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="email ID"
          style={{
            borderColor: errors.emailId ? "#ff0000" : "#dadada",
          }}
          {...register("emailId", {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: "유효한 이메일 주소를 입력하세요.",
            },
          })}
        />
        {errors.emailId && errors.emailId?.type === "required" && (
          <span>아이디를 입력하세요.</span>
        )}
        {errors.emailId && <span>{errors.emailId.message}</span>}
        <input
          type="password"
          placeholder="Password"
          style={{
            borderColor: errors.password ? "#ff0000" : "#dadada",
          }}
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "비밀번호는 6자 이상입니다.",
            },
          })}
        />
        {errors.password && errors.password?.type === "required" && (
          <span>비밀번호를 입력하세요.</span>
        )}
        {errors.password && errors.password?.type === "minLength" && (
          <span>{errors.password.message}</span>
        )}
        <input
          type="text"
          placeholder="your name"
          style={{
            borderColor: errors.userName ? "#ff0000" : "#dadada",
          }}
          {...register("userName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]+$/,
              message: "이름에는 특수문자가 포함될 수 없습니다.",
            },
          })}
        />
        {errors.userName && errors.userName?.type === "required" && (
          <span>이름을 입력하세요.</span>
        )}
        {errors.userName && errors.userName?.type === "pattern" && (
          <span>{errors.userName.message}</span>
        )}
        <input
          type="text"
          placeholder="nickname"
          style={{
            borderColor: errors.nickName ? "#ff0000" : "#dadada",
          }}
          {...register("nickName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]+$/,
              message: "닉네임에는 특수문자가 포함될 수 없습니다.",
            },
          })}
        />
        {errors.nickName && errors.nickName?.type === "required" && (
          <span>닉네임을 입력하세요.</span>
        )}
        {errors.nickName && errors.nickName?.type === "pattern" && (
          <span>{errors.nickName.message}</span>
        )}
        <input className="btn" type="submit" value="Sign up" />
        <Link to="/login">Log in?</Link>
      </form>
    </div>
  );
}

export default SignUp;
