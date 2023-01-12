import { Flex, Heading } from "@chakra-ui/react";

interface Continent {
  continent: {
    id: number;
    name: string;
    description: string;
    countries: string;
    continentImage: string;
    bannerImage: string;
    languages: string;
    popularCities: {
      amount: string;
      cities: [
        {
          id: number;
          name: string;
          image: string;
          country: string;
          flag: string;
        }
      ];
    };
  };
}

export function BannerContinent({ continent }: Continent) {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url('${continent.bannerImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
        textShadow="2px 2px #000000"
      >
        {continent.name}
      </Heading>
    </Flex>
  );
}
