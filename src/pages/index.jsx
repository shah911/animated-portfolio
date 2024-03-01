import CallToAction from "@/components/CallToAction";
import Curve from "@/components/Curve";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Curve>
      <Hero />
      <Section />
      <Projects />
      <CallToAction />
    </Curve>
  );
}
