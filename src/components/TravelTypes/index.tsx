import { Grid, GridItem } from "@chakra-ui/react";

import Building from "../../../public/assets/building.svg";
import Cocktail from "../../../public/assets/cocktail.svg";
import Earth from "../../../public/assets/earth.svg";
import Museum from "../../../public/assets/museum.svg";
import Surf from "../../../public/assets/surf.svg";
import { Travel } from "./Travel";

export function TravelTypes() {
  const travels = {
    cocktail: {
      text: "vida noturna",
      image: Cocktail,
    },
    surf: {
      text: "praia",
      image: Surf,
    },
    building: {
      text: "moderno",
      image: Building,
    },
    museum: {
      text: "clássico",
      image: Museum,
    },
    earth: {
      text: "e mais...",
      image: Earth,
    },
  };

  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", md: "repeat(5, 1fr)" }}
      w="100%"
      my={{ base: "9", md: "20" }}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      {Object.entries(travels).map(([key, item]) => (
        <GridItem key={key}>
          <Travel image={item.image.src} text={item.text} />
        </GridItem>
      ))}
    </Grid>
  );
}
