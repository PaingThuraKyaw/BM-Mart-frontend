import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Seller from "./page/seller";
const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/" />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
