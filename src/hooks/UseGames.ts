import UseData from "./UseData";

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

const useGame = () => UseData<Game>("/games");

export default useGame;
