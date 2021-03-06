//import css
import "./topbar.scss"
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import RoadmapIcon from '@material-ui/icons/TrendingFlat';
import GroupIcon from '@material-ui/icons/Group';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="center">
                    <div className="name">
                        <a href="#home" className="logo">Team Nodge</a>
                    </div>
                    <div className="menu">
                        <div className="itemContainer">
                            <HomeIcon className="icon"/>
                            <a href="#home">Home</a>
                        </div>
                        <div className="itemContainer">
                            <WorkIcon className="icon"/>
                            <a href="#project">Project</a>
                        </div>
                        <div className="itemContainer">
                            <RoadmapIcon className="icon"/>
                            <a href="#roadmap">Roadmap</a>
                        </div>
                        <div className="itemContainer">
                            <GroupIcon className="icon"/>
                            <a href="#members">Members</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}