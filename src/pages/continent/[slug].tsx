import { Box, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { BannerContinent, Header, Info } from "@/components";

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

export default function Continent({ continent }: Continent) {
  return (
    <div>
      <Header />
      <BannerContinent continent={continent} />
      <Box px={{ md: "8.75rem" }} py={{ md: "2rem" }}>
        <Box
          display={{ lg: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            color="dark_heading_and_text"
            fontSize={{ base: "sm", md: "2xl" }}
            fontWeight="normal"
            lineHeight={{ base: "5.5", md: "8" }}
            textAlign="justify"
            padding={{ base: "1rem" }}
            flex={{ md: "2" }}
          >
            {continent.description}
          </Box>
          <Flex flex={{ md: "2" }}>
            <Info label="países" value={continent.countries} />
            <Info label="línguas" value={continent.languages} />
            <Info label="cidades +100" value={continent.popularCities.amount} />
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  return {
    props: {
      continent: JSON.parse(cookies.CONTINENT),
    },
  };
};
