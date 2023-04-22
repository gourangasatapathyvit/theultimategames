import { HStack, Image, Text, Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, setColorMode } = useColorMode();

  const changeColorMode = () => {
    {
      colorMode === "light" ? setColorMode("dark") : setColorMode("light");
    }
  };
  return (
    <>
      <HStack justifyContent="space-between" p={3}>
        <HStack>
          <Image src={logo} boxSize={"60px"} />
          <Text textTransform={"uppercase"}>{"lorem"}</Text>
        </HStack>

        <HStack>
          <Button colorScheme="green" onClick={changeColorMode}>
            <>
              {colorMode === "light" && <MdLightMode />}
              {colorMode === "dark" && <MdDarkMode />}
            </>
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
