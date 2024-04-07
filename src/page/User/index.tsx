import { Container } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import UserNavbar from "./components/nav-bar";

const User = () => {
  return (
    <Container size={"xl"}>
      <UserNavbar/>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default User;
