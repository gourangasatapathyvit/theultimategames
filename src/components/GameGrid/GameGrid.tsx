import useGames from "../../hooks/UseGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import "./GameGrid.css";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="black.500"
          size="xl"
        />
      )}

      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
        p={2}
      >
        {games?.map((eachGame) => (
          // <li key={eachGame.id}>{eachGame.name}</li>
          <GameCard key={eachGame.id} game={eachGame} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
