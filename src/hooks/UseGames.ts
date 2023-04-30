import { useEffect, useState } from "react";
import fetchGamesData from "../services/FetchGamesData";
import { CanceledError } from "axios";

export interface PlatFormObject {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: PlatFormObject }[];
}

export interface GameModel {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetchGamesData
      .get<GameModel>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading, setGames, setError };
};

export default useGames;
