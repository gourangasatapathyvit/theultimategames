import useGames from "../../hooks/UseGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import "./GameGrid.css";
import GameCard from "../GameCard/GameCard";
import { Genres } from "../../hooks/UseGenres";

interface Props {
  fetchGenre: Genres | null;
}

const GameGrid = ({ fetchGenre }: Props) => {
  const { data, error, isLoading } = useGames(fetchGenre);

  return (
    <>
      {fetchGenre && <Text>{fetchGenre.name}</Text>}
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
        spacing={4}
        p={2}
      >
        {data?.map((eachGame) => (
          <GameCard key={eachGame.id} game={eachGame} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
