import { Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

interface CitiesProps {
  cities: [
    {
      id: number;
      name: string;
      image: string;
      country: string;
      flag: string;
    }
  ];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <>
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        lineHeight={{ base: "9", md: "13.5" }}
        fontWeight="medium"
        color="dark_heading_and_text"
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
        mt={{ base: "1.25rem", md: "2.5rem" }}
      >
        {cities.map((city) => (
          <City
            key={city.id}
            name={city.name}
            image={city.image}
            country={city.country}
            flag={city.flag}
          />
        ))}
      </Grid>
    </>
  );
}
