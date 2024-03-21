import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Loading
const User = lazy(() => import("./page/User"));
const Seller = lazy(() => import("./page/seller"));
const Item = lazy(() => import("./page/seller/page/item"));
const ForSale = lazy(() => import("./page/seller/page/for-sale"));
const Order = lazy(() => import("./page/seller/page/order"));
const CustomerChat = lazy(() => import("./page/seller/page/customer-chat"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<User />} index />
        <Route path="/user" element={<User />} />
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
