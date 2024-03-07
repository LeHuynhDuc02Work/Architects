import styleContent from "./styleContent.module.css"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import PictureMap from "./PictureMap"

function Content() {
    return (
        <div className={styleContent.content}>
            <Projects />
            <About />
            <Contact />
            <PictureMap />
        </div>
    )
}

export default Content