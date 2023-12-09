import About from "../components/About";
import Companies from "../components/Companies";
import Hero from "../components/Hero";

export const meta = () => {
  return [{ title: "Landing Page Design" }];
};

export default function Index() {
  return (
    <section>
      <Hero />
      <Companies />
      <About/>
    </section>
  );
}
