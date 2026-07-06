import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Benefits } from "./components/sections/Benefits";
import { About } from "./components/sections/About";
import { Schedule } from "./components/sections/Schedule";
import { Pricing } from "./components/sections/Pricing";
import { TrialForm } from "./components/sections/TrialForm";
import { Reviews } from "./components/sections/Reviews";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Schedule />
        <Pricing />
        <TrialForm />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
