import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeBar from "./components/Nav/Nav";
import Index from "./pages/Index"
import Author from "./pages/Author";
import AuthorList from "./components/author/AuthorList";
import AuthorDetail from "./components/author/AuthorDetail";
import Login from "./pages/Login/Login";
import SignUp from "./components/Login/SignUp"
import "./App.scss";
import "./scss/reset.scss";
import "./scss/common.scss"
import Preparing from "./components/Preparing/Preparing";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function Router() {
  return (
    <>
      <div>
        <HomeBar id="app" />
        <ScrollToTop>
          <Routes className="user-view-guard">
            <Route path="/" element={<Index />} />
            <Route path="/author" element={<Author />} />
            <Route path="/novel" element={<Preparing />} />
            <Route path="/comix" element={<Preparing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/author/list" element={<AuthorList />} />
            <Route path="/author/detail/:id" element={<AuthorDetail />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
}
;
export default Router;
