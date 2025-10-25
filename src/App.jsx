import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import ProductViewer from "./components/ProductViewer.jsx"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer />
        </main>
    )
}

export default App