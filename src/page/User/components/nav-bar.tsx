import {
  Box,
  Container,
  Flex,
  Group,
  Input,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "./style/nav-bar.module.css";
import {
  IconHeart,
  IconShoppingCartSearch,
  IconUserCircle,
} from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import UserLogin from "../../../components/user-login-model";
const UserNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const media = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.nav}>
      <Container size={"xl"} py={15} my={5}>
        <Flex align={"center"} justify={"space-between"}>
          <Box>Logo</Box>
          <Flex align={media ? "end" : "center"} pos={"relative"} gap={8}>
            <Input
              leftSection={
                <IconShoppingCartSearch size={18} style={{ marginLeft: 5 }} />
              }
              size={"md"}
              placeholder="Search your shop"
              classNames={{ input: classes.navInput }}
            />
            <Group  className={classes.footer} align="center" gap={15}>
              <UnstyledButton
                style={{
                  display: media ? "flex" : "",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={open}
              >
                <IconUserCircle size={media ? 30 : 25} />
                {media && <Text size="sm">Log in</Text>}
              </UnstyledButton>
              <UnstyledButton
                style={{
                  display: media ? "flex" : "",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconHeart size={media ? 30 : 25} />
                {media && <Text size="sm">Favourite</Text>}
              </UnstyledButton>
            </Group>
          </Flex>
        </Flex>
      </Container>
      <UserLogin opened={opened} close={close} />
    </Box>
  );
};

export default UserNavbar;
