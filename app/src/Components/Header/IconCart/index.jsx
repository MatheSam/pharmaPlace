import * as React from "react";
import Badge from "@mui/material/Badge";
import { FaShoppingCart } from "react-icons/fa";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <FaShoppingCart />
    </Badge>
  );
}
