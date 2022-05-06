//import css
import "./project.scss"

export default function Project() {

    const image1 =  "assets/appImage1.jpg";
    const image2 =  "assets/appImage2.jpg";
    const image3 =  "assets/appImage3.jpg";
    const google =  "assets/google store.jpg";
    const apple =  "assets/app store.jpg";

    return (
        <div className="project" id="project">
            <div className="main">
                <div className="top">
                    <div className="wrapper">
                        <h1>
                            PinCliq
                        </h1>
                        <h2>
                            Discover where the people and things you love are located.<br/> 
                            We want PinCliq to be a new world where people can experience their life with a new way to communicate and discover the world
                        </h2>
                    </div>
                </div>
                <div className="center">
                    <div className="imgContainer">
                        <img src={image1} alt=""/>
                        <p>&nbsp;&nbsp;</p>
                        <img src={image2} alt=""/>
                        <p>&nbsp;&nbsp;</p>
                        <img src={image3} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="imgContainer">
                            <a href="https://play.google.com/store/apps/details?id=com.pincliq">
                                <img src={google} alt=""/>
                            </a>
                            <a href="https://apps.apple.com/us/app/pincliq/id1617743269">
                                <img src={apple} alt=""/>
                            </a>
                    </div>
                </div>
            </div>
            <div className="down">
                <a href="#roadmap">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}