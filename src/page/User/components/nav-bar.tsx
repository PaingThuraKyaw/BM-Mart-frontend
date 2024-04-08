import {
  Container,
  Flex,
  Group,
  Input,
  Title,
  UnstyledButton,
} from "@mantine/core";
import classes from "./style/nav-bar.module.css";
import {
  IconHeart,
  IconLock,
  IconShoppingCartSearch,
} from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import UserLogin from "../../../components/user-login-model";
const UserNavbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const media = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Container size={"xl"} py={15} mb={10}>
        <Flex justify={"space-between"}>
          <Title order={media ? 3 : 2}>BM Mart</Title>
          <Flex align={media ? 'end' : 'center'} gap={8}>
            <Input
              leftSection={
                <IconShoppingCartSearch size={18} style={{ marginLeft: 5 }} />
              }
              size={media ? 'sm' : 'md'}
              placeholder="Search your shop"
              classNames={{ input: classes.navInput }}
            />
            <Group  align="center" gap={15}>
              <UnstyledButton onClick={open}>
                <IconLock size={media ? 18 : 25} />
              </UnstyledButton>
              <UnstyledButton>
                <IconHeart size={media ? 18 : 25} />
              </UnstyledButton>
            </Group>
          </Flex>
        </Flex>
      </Container>
      <UserLogin opened={opened} close={close} />
    </>
  );
};

export default UserNavbar;
