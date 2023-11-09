import { TopCreators } from "./components/TopCreators";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { Categories } from "./components/Categories";
import { Discover } from "./components/Discover";
import { MagicMashrooms } from "./components/MagicMashrooms";

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

      <section className="py-10 md:py-20">
        <div className="container">
          <div>
            <div className="w-full h-[1140px] bg-cover bg-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
