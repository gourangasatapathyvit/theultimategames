import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { PlatFormObject } from "../../hooks/UseGames";
import { IconType } from "react-icons";

interface Props {
  items: PlatFormObject[];
}

const MapIcons = ({ items }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <>
      <HStack marginY={2}>
        {items.map((platform) => (
          <Icon as={iconMap[platform.slug]}></Icon>
        ))}
      </HStack>
    </>
  );
};

export default MapIcons;
