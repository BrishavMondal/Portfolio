import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import BackgroundGlow from "./BackgroundGlow";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <BackgroundGlow />

      <Container className="relative z-10">
        <HeroContent />
      </Container>
    </section>
  );
}