import UseData from "./UseData";

export interface Genres {
  id: number;
  name: string;
  slug: string;
}

const useGenre = () => UseData<Genres>("/genres");

export default useGenre;
