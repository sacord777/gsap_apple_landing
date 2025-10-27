import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import ProductViewer from "./components/ProductViewer.jsx"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase.jsx"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer />
            <Showcase />
        </main>
    )
}

export default App