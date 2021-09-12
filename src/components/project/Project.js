//import css
import "./project.scss"

export default function Project() {

    const temp = "assets/sample.png";

    return (
        <div className="project" id="project">
            <div className="main">
                <div className="top">
                    <div className="wrapper">
                        <h1>
                            PinGround
                        </h1>
                        <h2>
                            Dummy: Mary Jones is an Administrative Assistant with eight years of experience 
                            working alongside the executive team of a Fortune 500 company. 
                        </h2>
                    </div>
                </div>
                <div className="bottom">
                    <div className="imgContainer">
                        <img src={temp} alt=""/>
                        {console.log(temp)}
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