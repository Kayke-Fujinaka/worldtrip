import { FiChevronLeft } from "react-icons/fi";

import {
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../../public/assets/logo.svg";

export function Header(): JSX.Element {
  const { asPath } = useRouter();

  return (
    <Flex as="header" py={{ base: 4, md: 7 }}>
      <Grid
        w="100%"
        alignItems={{ base: "start", md: "end" }}
        templateColumns="repeat(3, 1fr)"
      >
        {asPath !== "/" && (
          <ChakraLink as={Link} href="/">
            <Container>
              <Icon
                data-testid="back-to-home"
                color="#47585B"
                as={FiChevronLeft}
                cursor="pointer"
                boxSize={{ base: "16px", md: "32px" }}
              />
            </Container>
          </ChakraLink>
        )}
        <Image
          src={Logo.src}
          alt="worldtrip logo"
          gridColumn="2"
          justifySelf="center"
          w={{ base: "81px", md: "187px" }}
          h={{ base: "20px", md: "46px" }}
        />
      </Grid>
    </Flex>
  );
}
