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

export interface fetchResponse<T> {
  count: number;
  results: T[];
}

const UseData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetchGamesData
      .get<fetchResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
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

  return { data, error, isLoading, setData, setError };
};

export default UseData;
