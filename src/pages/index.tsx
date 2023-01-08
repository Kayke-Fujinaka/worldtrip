import { Banner, Header } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header />
      <Banner />
    </>
  );
}
