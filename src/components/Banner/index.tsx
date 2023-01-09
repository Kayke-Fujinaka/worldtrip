import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import Airplane from "../../../public/assets/airplane.svg";
import SkyBanner from "../../../public/assets/sky.svg";

export function Banner() {
  return (
    <Flex
      align="center"
      backgroundImage={SkyBanner.src}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="space-around"
      py={{ base: "7", md: "10" }}
      px={{ base: "4", md: "16" }}
    >
      <Stack>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          lineHeight={{ base: "7.5", md: "54px" }}
          fontWeight="medium"
          color="light_heading_and_text"
        >
          6 Continentes, <br /> infinitas possibilidades.
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "xl" }}
          fontWeight="normal"
          color="ligth_info"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Stack>
      <Box
        display={{ base: "none", md: "block" }}
        position="relative"
        top="50px"
        width="470px"
        height="270px"
        transform="rotate(3deg)"
      >
        <Image src={Airplane.src} alt="airplane" />
      </Box>
    </Flex>
  );
}
