import useGenre, { Genres } from "../../hooks/UseGenres";

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  getGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreData = ({ getGenre, selectedGenre }: Props) => {
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
          <ListItem key={item.id} paddingY={"2"}>
            <HStack>
              <Image
                boxSize={"20"}
                borderRadius={8}
                src={item.image_background}
              />
              <Button
                fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                title={item.name}
                variant={"link"}
                onClick={() => {
                  console.log(item);
                  getGenre(item);
                }}
                fontSize={"lg"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreData;
