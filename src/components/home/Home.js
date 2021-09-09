//import css
import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./home.scss"

export default function Home() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed:60,
            showCursor: true,
            strings: ["Web Developer", "Software Developer"]
        })
    }, [])

    return (
        <div className="home" id="home">
            <div className="main">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/teamImages.jpg" alt=""/>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Who Are We?</h2>
                        <h1>Team Nodge</h1>
                        <h3>Test <span ref={textRef}></span></h3>
                    </div>
                </div>
            </div>
            <div className="down">
                <a href="#project">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}