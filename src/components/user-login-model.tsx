import { Modal } from "@mantine/core";

interface ModelProp {
  opened: boolean;
  close: () => void;
}

const UserLogin = ({ opened , close }: ModelProp) => {
  return <Modal opened={opened} onClose={close} centered >
    hello world
  </Modal>;
};

export default UserLogin;
