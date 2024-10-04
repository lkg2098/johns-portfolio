import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Home() {
    return (
        <>
            <main>
                <div>
                    <section id="landing">
                        <Landing />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </main>
        </>
    )
}
