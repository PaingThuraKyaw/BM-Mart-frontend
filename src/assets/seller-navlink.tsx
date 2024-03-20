import { IconBasket, IconCategory } from "@tabler/icons-react";

export const sellerNavLink = [
  {
    link: "/seller",
    title: "Item",
    icon: <IconCategory />,
  },
  {
    link: "/seller/for-sale",
    title: "For Sale",
    icon: <IconBasket />,
  },
  {
    link: "/seller/order",
    title: "Order",
  },
  {
    link: "/seller/customer-chat",
    title: "Customer Chat",
  },
];
