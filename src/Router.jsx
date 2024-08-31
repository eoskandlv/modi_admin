import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeBar from "./components/Nav/Nav";
import Index from "./pages/Index"
import Author from "./pages/Author";
import "./App.scss";
import "./scss/reset.scss";
import "./scss/common.scss"
import Novel from "./pages/novel/Novel";

function Router() {
  return (
    <>
      <div>
        <HomeBar id="app" />
        <Routes className="user-view-guard">
          <Route path="/" element={<Index />} />
          <Route path="/author" element={<Author />} />
          <Route path="/novel" element={<Novel />} />
        </Routes>
      </div>
    </>
  );
}

export default Router;
