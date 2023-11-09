import { TopCreators } from "./components/TopCreators";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { Categories } from "./components/Categories";

function App() {
  return (
    <div>
      <Header />
      <SectionHero />
      <Collection />
      <TopCreators />
      <Categories />
    </div>
  );
}

export default App;
