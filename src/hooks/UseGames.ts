import UseData from "./UseData";
import { Genres } from "./UseGenres";

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

const useGame = (fetchGenre: Genres | null) =>
  UseData<Game>("/games", { params: { genres: fetchGenre?.id } }, [
    fetchGenre?.id,
  ]);

export default useGame;
