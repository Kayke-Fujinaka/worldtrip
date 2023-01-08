import { Grid, GridItem } from "@chakra-ui/react";

import { Travel } from "./Travel";

export function TravelTypes() {
  const travels = {
    cocktail: "vida noturna",
    surf: "praia",
    building: "moderno",
    museum: "clássico",
    earth: "e mais...",
  };

  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", md: "repeat(5, 1fr)" }}
      w="100%"
      mt={{ base: "9", md: "20" }}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      {Object.entries(travels).map(([key, text]) => (
        <GridItem key={key}>
          <Travel image={key} text={text} />
        </GridItem>
      ))}
    </Grid>
  );
}
