import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={Paths.home} element={<Home />} />
            <Route path={Paths.blog} element={<Blog />} />
        </Routes>
    );
};

export default AppRouter
