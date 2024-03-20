import { NavLink } from "react-router-dom";
import { sellerNavLink } from "../../../assets/seller-navlink";
import { Box, Flex } from "@mantine/core";
import classes from "./style/seller-nav.module.css";

const Navbar = ({ closed }: { closed: () => void }) => {
  return (
    <Flex direction={"column"} gap={10}>
      {sellerNavLink.map((item, index) => (
        <Box>
          <NavLink
            onClick={closed}
            className={classes.link}
            to={item.link}
            key={index}
          >
            {item.title}
          </NavLink>
        </Box>
      ))}
    </Flex>
  );
};

export default Navbar;
