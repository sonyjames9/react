import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "dark" ? "Light" : "Dark"}
      </Button>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </header>
  );
}

export default App;
