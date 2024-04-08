import { Container } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import UserNavbar from "./components/nav-bar";

const User = () => {
  return (
    <>
        <UserNavbar />
      <Container size={"xl"}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default User;
