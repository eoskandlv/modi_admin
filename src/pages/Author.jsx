import AuthorList from "../components/author/AuthorList";
import AuthorSave from "../components/author/AuthorSave";
import AuthorDetial from "../components/author/AuthorDetail";
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
          {/* <AuthorList authorsList={authorsList} /> */}
          {/* <AuthorSave /> */}
        </div>
      </>
    );
}

export default Author;