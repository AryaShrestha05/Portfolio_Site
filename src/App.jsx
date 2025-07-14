import heroVideo from "/src/assets/videos/heroVid.mp4";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Video />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
