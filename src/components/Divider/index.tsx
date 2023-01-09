import { Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
  return (
    <ChakraDivider
      width={{ base: "60px", md: "90px" }}
      height={{ base: "1px", md: "2px" }}
      bgColor="dark_heading_and_text"
      opacity="1"
      mx="auto"
    />
  );
}
