import useGames from "../../hooks/UseGames";
import { Text } from "@chakra-ui/react";
import "./GameCard.css";

const GameCard = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul className="ulx">
        {games?.map((eachGame) => (
          <li key={eachGame.id}>{eachGame.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameCard;
