import useGenre from "../../hooks/UseGenres";

import { Spinner, Text } from "@chakra-ui/react";

const GenreData = () => {
  //   const { genres, error, isLoading } = UseGenres();
  const { data, error, isLoading } = useGenre();
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
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreData;
