import { Container } from "@mantine/core";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Container size={"xl"}>
      <div>User</div>
      <Link to={"/seller"}>Go to seller</Link>
    </Container>
  );
};

export default User;
