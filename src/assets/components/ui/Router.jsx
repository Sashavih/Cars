import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import CarDetails from "../screens/CarDetails/CarDetails";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<CarDetails />} path='/car/:id' />
            <Route element={<div>Not Found</div>} path='*' />
        </Routes>
    </BrowserRouter>
}
export default Router;