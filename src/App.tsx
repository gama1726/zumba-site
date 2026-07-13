import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Directions } from "./components/sections/Directions";
import { Schedule } from "./components/sections/Schedule";
import { Pricing } from "./components/sections/Pricing";
import { Members } from "./components/sections/Members";
import { Reviews } from "./components/sections/Reviews";
import { Offers } from "./components/sections/Offers";
import { TrialForm } from "./components/sections/TrialForm";
import { FloatingPromo } from "./components/ui/FloatingPromo";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Directions />
        <Schedule />
        <Pricing />
        <Members />
        <Reviews />
        <Offers />
        <TrialForm />
      </main>
      <Footer />
      <FloatingPromo />
    </>
  );
}
