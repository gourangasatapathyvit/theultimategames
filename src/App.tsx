import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`,
        }}
        // gridTemplateRows={"50px 1fr 30px"}
        // gridTemplateColumns={"150px 1fr"}
        // h="200px"
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <Show above="lg">
          <GridItem bg="pink.300" area={"aside"}>
            aside
          </GridItem>

          {/* <GridItem bg="orange.300" area={"header"}>
            Header
          </GridItem> */}
        </Show>

        <Show below="lg"></Show>

        <GridItem bg="blue.300" area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <GridItem bg="green.300" area={"main"}>
          <GameGrid />
        </GridItem>

        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
