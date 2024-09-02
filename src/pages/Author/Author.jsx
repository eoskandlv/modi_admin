import AuthorList from "../../components/Author/AuthorList";
import AuthorSave from "../../components/Author/AuthorSave";
import AuthorDetial from "../../components/Author/AuthorDetail";
import "./Author.scss"
import { useParams } from "react-router-dom";

const Author = () => {
  const currentPath = window.location.pathname;
    return (
      <>
        <div className="author-wrap">
          {currentPath === "/author/list" && <AuthorList />}
          {currentPath === "/author" && <AuthorSave />}
          {currentPath === "/author/detail/:id" && <AuthorDetial />}
        </div>
      </>
    );
}

export default Author;