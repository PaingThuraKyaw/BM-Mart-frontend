import { NavLink, useLocation } from "react-router-dom";
import { sellerNavLink } from "../../../assets/seller-navlink";
import { Box, Flex } from "@mantine/core";
import classes from "./style/seller-nav.module.css";

const Navbar = ({ closed }: { closed: () => void }) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Flex direction={"column"} gap={10}>
      {sellerNavLink.map((item, index) => (
        <Box style={{ position: "relative" }}>
          <NavLink
            onClick={closed}
            className={classes.link}
            style={
              pathname === item.link ? { color: "white" } : { color: "black" }
            }
            to={item.link}
            key={index}
          >
            {item.title}
          </NavLink>
          <Box
            className={pathname === item.link ? classes.linkActive : ""}
          ></Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Navbar;
