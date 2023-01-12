import { useEffect, useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "@/services/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Continent {
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
}

export function Carrousel() {
  const router = useRouter();

  const [continents, setContinents] = useState([]);

  useEffect(() => {
    api
      .get("/continents")
      .then((response) => setContinents(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClickInSlide = (continent: Continent): void => {
    setCookie(null, "CONTINENT", JSON.stringify(continent));
    router.push(`continent/${continent.id}`);
  };

  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{
          width: "100%",
          flex: "1",
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
        }}
      >
        {continents.map((continent: Continent) => (
          <SwiperSlide
            key={continent.id}
            onClick={() => handleClickInSlide(continent)}
          >
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgColor="#000000"
              bgImage={`url('${continent.continentImage}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              opacity={0.9}
              textAlign="center"
              textShadow="1px 2px #000000"
            >
              <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="gray.100"
                fontWeight="bold"
              >
                {continent.name}
              </Heading>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
