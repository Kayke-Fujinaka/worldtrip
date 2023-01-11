import { Heading } from "@chakra-ui/react";

import { Banner, Carrousel, Divider, Header, TravelTypes } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        textAlign="center"
        color="dark_heading_and_text"
        fontWeight="medium"
        fontSize={{ base: "xl", md: "4xl" }}
        lineHeight={1.5}
        my={{ base: 3, md: 12 }}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
      <Carrousel />
    </>
  );
}
