import { useEffect, useState } from "react";
import fetchGamesData from "../services/FetchGamesData";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameModel {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetchGamesData
      .get<GameModel>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error, setGames, setError };
};

export default useGames;