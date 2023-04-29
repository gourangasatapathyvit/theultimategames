import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/UseGames";
import MapIcons from "../PlatFormIcon/MapIcons";
import Rating from "../MetaCritic/Rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <MapIcons
              items={game.parent_platforms.map((item) => item.platform)}
            />
            <Rating metacritic={game.metacritic}></Rating>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
