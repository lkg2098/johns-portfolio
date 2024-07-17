import Landing from "./Landing";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Home() {
    return (
        <>
            <main>
                <div>
                    <section id="home">
                        <Landing />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </main>
        </>
    )
}
