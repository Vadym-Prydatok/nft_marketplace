import { TopCreators } from "./components/TopCreators";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";

function App() {
  return (
    <div>
      <Header />
      <SectionHero />
      <Collection />
      <TopCreators />
    </div>
  );
}

export default App;
