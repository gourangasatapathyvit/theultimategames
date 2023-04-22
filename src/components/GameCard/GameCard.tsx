import { useEffect, useState } from "react";
import fetchGamesData from "../../services/FetchGamesData";
import { Text } from "@chakra-ui/react";
import "./GameCard.css";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameModel {
  count: number;
  results: Game[];
}

const GameCard = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGamesData
      .get<GameModel>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
