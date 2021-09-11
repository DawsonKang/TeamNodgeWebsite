import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

//import css
import "./members.scss"


export default function Members() {

    const data = [
        {
            img: "assets/emptyProfiles.png",
            name: "Scott Song",
            position: "Leader/Fronted",
            bio: "This is fake bio",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
            email: "",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Adam Carmody",
            position: "Frontend",
            bio: "This is fake bio",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
            email: "",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Polina Semenova",
            position: "Frontend",
            bio: "This is fake bio",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
            email: "",
        },
        {
            img: "assets/emptyProfiles.png",
            name: "Dongwoo Kang",
            position: "Backend",
            bio: "This is fake bio",
            linkedInURL: "https://linkedin.com/in/dongwookang0412",
            gitHubURL: "https://github.com/DawsonKang",
            email: "dawson41271@gmail.com",
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
                                <a target="_blank" rel="noopener noreferrer" href={member.email}>
                                    <EmailIcon/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={member.gitHubURL}>
                                    <GitHubIcon/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={member.linkedInURL}>
                                    <LinkedInIcon/>
                                </a>
                            </h1>
                            <h2>{member.position}</h2>
                            <div className="bio">
                                <h3>{member.bio}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}