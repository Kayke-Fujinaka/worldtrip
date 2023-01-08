import { Banner, Header, TravelTypes } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <Banner />
      <TravelTypes />
    </>
  );
}
