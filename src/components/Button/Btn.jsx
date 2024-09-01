import "./Btn.scss"
import { useState, useEffect } from "react";

const SaveBtn = ({  type, colorType, onClick  }) => {
  const [title, setTitle] = useState("");

  const buttonColor = () => {
    switch (colorType) {
      case "save":
        return { backgroundColor: "#98bb45" };
      case "list":
        return { backgroundColor: "#f1c83e" };
      case "delete":
        return { backgroundColor: "#EF5350" };
      default:
        return { backgroundColor: "#162cac" };
    }
  };
  const renderMessage = () => {
    switch (colorType) {
      case "save":
        return "등록";
      case "modify":
        return "수정";
      case "delete":
        return "삭제";
      case "list":
        return "목록";
    }
  }
  return (
    <>
      <button
        className="button__actions"
        style={buttonColor()}
        onClick={onClick}
      >
        {renderMessage()}
      </button>
    </>
  );
};

export default SaveBtn