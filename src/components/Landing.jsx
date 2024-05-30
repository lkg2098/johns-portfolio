export default function Landing() {
    return (
        <section className="d-flex" id="landing-section">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="row d-flex py-3">
                    <div className="col-lg-6 d-flex flex-column justify-content-center mb-2">
                        <h1>John Gray</h1>
                        <h2>Full-stack Developer</h2>
                        <p className="sub-header">A really nice guy!</p>
                        <div className="pb-4">
                            <a className="p-2" href="https://www.linkedin.com/in/john-thomas-gray" target="_blank" rel="noopener noreferrer">
                                <img src="img/linkedin.png" alt="linkedin icon" width="22px" />
                            </a>
                            <a className="p-2" href="https://github.com/john-thomas-gray" target="_blank" rel="noopener noreferrer">
                                <img src="img/github.png" alt="github icon" width="22px" />
                            </a>
                            <a className="p-2" href="mailto:johnthomgray@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="img/mail.png" alt="mail icon" width="22px" />
                            </a>
                        </div>
                        <div className="mt-2 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid profile-pic" src="./img/johngray.png" alt="Profile pic" width="200px"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
