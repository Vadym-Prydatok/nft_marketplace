import { TopCreators } from "./components/TopCreators";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { Categories } from "./components/Categories";
import { Discover } from "./components/Discover";
import { MagicMashrooms } from "./components/MagicMashrooms";
import { HowItWorks } from "./components/HowItWorks";
import { JoinUs } from "./components/JoinUs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SectionHero />
      <Collection />
      <TopCreators />
      <Categories />
      <Discover />
      <MagicMashrooms />
      <HowItWorks />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
