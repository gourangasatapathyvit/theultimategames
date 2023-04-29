import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const Rating = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : "yellow";
  return (
    <Badge paddingX={2} colorScheme={color} fontSize={"14px"} borderRadius={4}>
      {metacritic}
    </Badge>
  );
};

export default Rating;
