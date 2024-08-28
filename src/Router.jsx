import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HomeBar from "./components/common/Nav";
import "./App.scss";

function Router() {
  return (
    <>
      <div>
        <HomeBar id="app" />
      </div>
    </>
  );
}

export default Router;
