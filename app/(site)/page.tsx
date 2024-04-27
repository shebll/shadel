import Hero from "./components/Hero"
import HorizontalScrolling from "./components/HorizontalScrolling"
import Services from "./components/Serveces"
import Aboutus from "./components/VAbout"
export default function Home() {
  return (
    <main>
      <Hero />
      <HorizontalScrolling />
      <Aboutus />
      <Services />
    </main>
  )
}
