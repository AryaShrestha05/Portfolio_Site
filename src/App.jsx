import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Scroll down... more content here!</p>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-200">
        <p className="text-xl text-gray-600">Still scrolling... keep going!</p>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-300">
        <p className="text-xl text-gray-600">Almost there!</p>
      </section>
    </>
  )
}

export default App
