import { Container, Text } from "@chakra-ui/react";

interface InfoProps {
  value: string;
  label: string;
}

export function Info({ value, label }: InfoProps) {
  return (
    <Container mt="1rem" mb="2rem" textAlign={{ base: "start", md: "center" }}>
      <Text
        as="strong"
        color="highlight"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontWeight="semibold"
        lineHeight={{ base: "8", md: "18" }}
      >
        {value}
      </Text>
      <Text
        as="p"
        color="dark_heading_and_text"
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="normal"
        lineHeight={{ base: "7.5", md: "8" }}
      >
        {label}
      </Text>
    </Container>
  );
}
