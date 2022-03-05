import "./roadmap.scss"

export default function Roadmap() {

    const roadmapImg = "assets/roadmap2022.png"

    return (
        <div className="roadmap" id="roadmap">
            <div className="main">
                <div className="wrapper">
                    <h1>
                        Roadmap
                    </h1>
                </div>
                <div className="imgContainer">
                    <img src={roadmapImg} alt=""/>
                </div>
            </div>
            <div className="down">
                <a href="#members">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    );
}