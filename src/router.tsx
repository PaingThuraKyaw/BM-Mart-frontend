import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Loading
const User = lazy(() => import("./page/User"));
const Product = lazy(() => import("./page/User/page/Product"));
const ManFashion = lazy(() => import("./page/User/page/men-fashion"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<Product />} />
          <Route path="/men-fashion" element={<ManFashion />} />
          <Route />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
