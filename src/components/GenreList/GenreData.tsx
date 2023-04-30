import useGenre from "../../hooks/UseGenres";

import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

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
      <List>
        {data?.map((item) => (
          <>
            <ListItem key={item.id} paddingY={"2"}>
              <HStack>
                <Image
                  boxSize={"20"}
                  borderRadius={8}
                  src={item.image_background}
                />
                <Text fontSize={"lg"}>{item.name}</Text>
              </HStack>
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export default GenreData;
