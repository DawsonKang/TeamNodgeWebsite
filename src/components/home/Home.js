//import css
import { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import "./home.scss"

export default function Home() {

    const imgData = [
        {
            img: "assets/team1.jpg"
        },
        {
            img: "assets/teamImage2.jpg"
        },
        {
            img: "assets/teamImage3.jpg"
        }
    ]

    const textRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timeSilde, setTimeSilde] = useState(0);

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed:60,
            showCursor: true,
            strings: ["Team Nodge"]
        })
    }, [])

    useEffect(()=> {
        function auto() {
            setTimeout(()=> {
                if(timeSilde === 2) {
                    setTimeSilde(0);
                    setCurrentSlide(timeSilde);
                } else {
                    setTimeSilde(timeSilde+1);
                    setCurrentSlide(timeSilde);
                }
            }, 7000);
        }

        auto();
    },[timeSilde])


    const handleClick = (way) => {
        way === "left" 
            ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2)
            : setCurrentSlide(currentSlide<imgData.length-1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="home" id="home">
            <div className="main">
                <div className="left">
                    <img src="assets/arrow.png" className="arrow leftOne" alt="" onClick={() => handleClick("left")}/>
                    <div className="slider">
                        <div className="imgContainer">
                            <img src={imgData[currentSlide].img} alt=""/>
                        </div>
                        <div className="indexContainer">
                            <div>
                                <span className="indexer" onClick={() => setCurrentSlide(0)}></span>
                            </div>
                            <div>
                                <span className="indexer" onClick={() => setCurrentSlide(1)}></span>
                            </div>
                            <div>
                                <span className="indexer" onClick={() => setCurrentSlide(2)}></span>
                            </div>
                        </div>
                    </div>
                    <img src="assets/arrow.png" className="arrow rightOne" alt="" onClick={() => handleClick("left")}/>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Who Are We?</h2>
                        <h1><span ref={textRef}></span></h1>
                        <h3>"Let's Change the World!"</h3>
                        <p>
                        Our team’s vision is to help you experience a new world through our app. We are developing an app that will become a new way of social connection.
                        </p>
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