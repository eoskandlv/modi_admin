import AuthorList from "../components/author/AuthorList";
import "./Author.scss"

const dummyList = [
  {
    id: 1,
    author: "hyun",
    content: "첫번째",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "jeong",
    content: "두번째",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "react",
    content: "3번째",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];
const Author = () => {
    return (
      <>
        <div className="content">
          <AuthorList dummyList={dummyList}/>
        </div>
      </>
    );
}

export default Author;