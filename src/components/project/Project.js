//import css
import "./project.scss"

export default function Project() {


    return (
        <div className="project" id="project">
            <div className="main">
                <div className="top">
                    <div className="wrapper">
                        <h1>
                            PinGround
                        </h1>
                        <h2>
                            blah blah
                            blah blah blah something
                            blah blah blah something
                        </h2>
                        <h2>
                            blah blah blah something
                            blah blah blah something
                        </h2>
                    </div>
                </div>
                <div className="bottom">
                    <div className="imgContainer">
                        <img src="assets/sampleApp.PNG" alt=""/>
                    </div>
                </div>
            </div>
            <div className="down">
                <a href="#members">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}