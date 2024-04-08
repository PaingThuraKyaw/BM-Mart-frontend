import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Loading
const User = lazy(() => import("./page/User"));
const Home = lazy(() => import("./page/User/page/Home"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<Home />} />
          <Route />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
