import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import UserNavbar from "./page/User/components/nav-bar";

// Lazy Loading
const User = lazy(() => import("./page/User"));
const Product = lazy(() => import("./page/User/page/Product"));
const ManFashion = lazy(() => import("./page/User/page/men-fashion"));
const ProductDetail = lazy(
  () => import("./page/User/page/Product/product-detail")
);

const Router = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<User />}>
            <Route index element={<Product />} />
            <Route path="/men-fashion" element={<ManFashion />} />
          </Route>
          {/* Product Detail */}
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
