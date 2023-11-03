import Navbar from "./components/Navbar";
import Images from "./components/ImageComponent";
import Content from "./components/ContentComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section className="md:grid-cols-2 md:grid">
        <Images />
        <Content />
      </section>
    </div>
  );
}

export default App;
