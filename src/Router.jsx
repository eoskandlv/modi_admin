import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeBar from "./components/Nav/Nav";
import Index from "./pages/Index"
import Author from "./pages/Author";
import "./App.scss";
import "./scss/reset.scss";
import "./scss/common.scss"

function Router() {
  return (
    <>
      <div>
        <HomeBar id="app" />
        <Routes className="user-view-guard">
          <Route path="/" element={<Index />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </div>
    </>
  );
}

export default Router;
