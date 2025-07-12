import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import heroVideo from '/src/assets/videos/heroVid.mp4';


function App() {

  return (
    <>
    <video 
      src='{heroVideo}'
      autoPlay
      loop
      muted
      className='fixed inset-0 object-cover w-full h-full'
    />
      <Navbar />
      <Hero />
      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-xl text-gray-600">Scroll down... more content here!</p>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-200">
        <p className="text-xl text-gray-600">Still scrolling... keep going!</p>
      </section>
    </>
  )
}

export default App
