import { FiChevronLeft } from "react-icons/fi";

import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../../public/assets/logo.svg";

export function Header(): JSX.Element {
  const router = useRouter();
  const homePath = router.asPath === "/";

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      width="100%"
      py={{ base: 4, md: 7 }}
    >
      {homePath && (
        <ChakraLink
          as={Link}
          href="/"
          position="absolute"
          top={["32px", "28px", "40px"]}
          left={{ base: "18px", lg: "60px" }}
        >
          <Icon
            color="#47585B"
            as={FiChevronLeft}
            fontSize={["1.4rem", "1.8rem"]}
          />
        </ChakraLink>
      )}
      <Image src={Logo.src} alt="worldtrip logo" />
    </Flex>
  );
}
