import { AppShell, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./components/seller-nav";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Seller = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex gap={3} mt={16} ml={"md"}>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size={"sm"}
            />
            <div>Logo</div>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p={"md"}>
          <Navbar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default Seller;
