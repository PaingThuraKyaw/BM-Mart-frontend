import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy Loading
const Home = lazy(() => import("./page/Home"));
const Seller = lazy(() => import("./page/seller"));
const Item = lazy(() => import("./page/seller/page/item"));
const ForSale = lazy(() => import("./page/seller/page/for-sale"));
const Order = lazy(() => import("./page/seller/page/order"));
const CustomerChat = lazy(() => import("./page/seller/page/customer-chat"));

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/home" element={<Home />} />
        <Route path="/seller" element={<Seller />}>
          <Route index element={<Item />} />
          <Route path="/seller/for-sale" element={<ForSale />} />
          <Route path="/seller/order" element={<Order />} />
          <Route path="/seller/customer-chat" element={<CustomerChat />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
