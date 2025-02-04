import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import SignupFirstPage from "../pages/Signup/first";
import SignupSecondPage from "../pages/Signup/second";
import PostDetail from "../components/common/Table/Detail";
import WritingPage from "../pages/Writing";
import CategoryPage from "../pages/Category";
import MyPage from "../components/MyPage";
import PopularPage from "../pages/Home/Popular";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<PopularPage />} path="/popular" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupFirstPage />} path="/Signup" />
      <Route element={<SignupSecondPage />} path="/SignupSecond" />
      <Route element={<PostDetail />} path="/post/:id" />
      <Route element={<WritingPage />} path="/write" />
      <Route element={<CategoryPage />} path="/post" />
      <Route element={<MyPage />} path="/profile" />
    </Routes>
  );
};

export default Router;
