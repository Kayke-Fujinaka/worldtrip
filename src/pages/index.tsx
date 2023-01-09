import { Heading } from "@chakra-ui/react";

import { Banner, Divider, Header, TravelTypes } from "@/components";
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
        lineHeight={1.5}
        my={{ base: 3, md: 12 }}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
    </>
  );
}
