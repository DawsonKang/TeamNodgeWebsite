import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//import css
import "./members.scss"


export default function Members() {

    const data = [
        {
            img: "assets/emptyProfiles.png",
            name: "Dongwoo Kang",
            position: "backend",
            bio: "testdofjsdifjsdijfidsjfodsjfkdsjf",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Dongwoo Kang",
            position: "backend",
            bio: "testdofjsdifjsdijfidsjfodsjfkdsjf",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Dongwoo Kang",
            position: "backend",
            bio: "testdofjsdifjsdijfidsjfodsjfkdsjf",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Dongwoo Kang",
            position: "backend",
            bio: "testdofjsdifjsdijfidsjfodsjfkdsjf",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
        },
    ]

    return (
        <div className="members" id="members">
            <h1>Team Members</h1>
            <div className="container">
                {data.map( (member) => (
                    <div className="item">
                        <div className="imgContainer">
                            <img src={member.img} alt=""/>
                        </div>
                        <div className="wrapper">
                            <h1>
                                {member.name}
                                <a target="_blank" rel="noopener noreferrer" href={member.gitHubURL}>
                                    <GitHubIcon style={{padding: "2px"}}/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={member.linkedInURL}>
                                    <LinkedInIcon style={{padding: "2px"}}/>
                                </a>
                            </h1>
                            <h2>{member.position}</h2>
                            <h3>{member.bio}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}