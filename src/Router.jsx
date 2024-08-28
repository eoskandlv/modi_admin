import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HomeBar from "./components/common/Nav";
import MainSection from "./components/index/MainSection/MainSection";
import SecondSection from "./components/index/SecondSection/SecondSection";
import "./App.scss";
import ThirdSection from "./components/index/ThirdSection/ThirdSection";
import FourthSection from "./components/index/FourthSection/FourthSection";

function Router() {
  return (
    <>
      <div>
        <HomeBar id="app" />
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection/>
      </div>
    </>
  );
}

export default Router;
