import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelProps {
  image: string;
  text: string;
}

export function Travel({ image, text }: TravelProps) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={{ base: "row", md: "column" }}
      align="center"
      justify="center"
    >
      {isMobile ? (
        <Image src={image} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="highlight" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text
        fontWeight="semibold"
        color="dark_heading_and_text"
        fontSize={{ base: "lg", md: "2xl" }}
        textAlign={{ md: "center" }}
      >
        {text}
      </Text>
    </Flex>
  );
}
