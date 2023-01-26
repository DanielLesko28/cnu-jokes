import { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
} from "@chakra-ui/react";
import { getCategories } from "../api/getCategories";
import { RxHamburgerMenu } from "react-icons/rx";

export function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" minW={0}>
        <RxHamburgerMenu />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <Heading size="md">Categories</Heading>
        <MenuDivider />
        {categories.map((category) => {
          return (
            <Link
              to={
                `/CategoryJokes/?category=${category}`
                //pathname: `/CategoryJokes/?category=${category}`,
                //search: `?category=${category}`,
              }
              key={category}
            >
              <MenuItem key={category}>{category}</MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}
