import { Divider } from "@chakra-ui/react";

import { Banner, Header, TravelTypes } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        width={{ base: "60px", md: "90px" }}
        height={{ base: "1px", md: "2px" }}
        bgColor="dark_heading_and_text"
        opacity="1"
        mx="auto"
      />
    </>
  );
}
