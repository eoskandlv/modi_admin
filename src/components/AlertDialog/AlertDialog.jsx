import React, { useState, useEffect } from "react";
import "./AlertDialog.scss"

function AlertDialog({
  dialogToggle,
  type,
  config,
  onClose,
  onConfirmSave,
  onConfirmModify,
  onConfirmDelete,
}) {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      
    if (dialogToggle) {
      setIsLoading(false);
      init();
    }
  }, [dialogToggle]);

  const init = () => {
    setTitle(config.title || "알림");
  };

    const dialogTitleColor = () => {
    switch (type) {
      case "modify":
        return { backgroundColor: "#2196F3" };
      case "delete":
      case "error":
        return { backgroundColor: "#EF5350" };
      default:
        return { backgroundColor: "#CDDC39" };
    }
  };

  const handleConfirmClick = () => {
    setIsLoading(true);
    switch (type) {
      case "save":
        onConfirmSave();
        break;
      case "modify":
        onConfirmModify();
        break;
      case "delete":
        onConfirmDelete();
        break;
      default:
        break;
    }
  };

  const renderIcon = () => {
    switch (type) {
      case "save":
      case "modify":
        return "✔️";
      case "delete":
        return "🗑️";
      case "ok":
        return "✔️";
      case "error":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  const renderMessage = () => {
    switch (type) {
      case "save":
        return "저장하시겠습니까?";
      case "modify":
        return "수정하시겠습니까?";
      case "delete":
        return "삭제하시겠습니까?";
      case "ok":
        return "정상처리되었습니다.";
      case "error":
        return (
          <>
            <h2>에러가 발생했습니다.</h2>
            <div className="error-table-wrap">
              <table className="error-table">
                <colgroup>
                  <col width="100px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="text-center">에러코드</td>
                    <td>{config.error.code}</td>
                  </tr>
                  <tr>
                    <td className="text-center">에러내용</td>
                    <td
                      dangerouslySetInnerHTML={{ __html: config.error.message }}
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      case "customMessage":
        return (
          <h2 dangerouslySetInnerHTML={{ __html: config.custom.message }} />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`dialog ${dialogToggle ? "open" : ""}`}>
      <div
        className="dialog-overlay"
        onClick={onClose}
        onClick={(e) => e.stopPropagation()}
      ></div>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header" style={dialogTitleColor()}>
          <h2>{title}</h2>
          <button className="dialog-close" onClick={onClose}>
            ✖️
          </button>
        </div>
        <div className="dialog-body">
          <div className="alert__message">
            <span className="status-icon">{renderIcon()}</span>
            <div>{renderMessage()}</div>
          </div>
        </div>
        <div className="dialog-actions">
          {["save", "modify", "delete"].includes(type) ? (
            <>
              <button
                className="button button-secondary"
                disabled={isLoading}
                onClick={onClose}
              >
                아니오
              </button>
              <button
                className="button button-primary"
                onClick={handleConfirmClick}
                disabled={isLoading}
              >
                {isLoading ? "처리 중..." : "예"}
              </button>
            </>
          ) : (
            <button className="button button-primary" onClick={onClose}>
              확인
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlertDialog;
