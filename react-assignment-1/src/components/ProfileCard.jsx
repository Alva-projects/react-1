import Profile from "../components/Profile.jsx";
import screenshotBhromaon from "../assets/screenshotBhromaon.png";
import screenshotRecepies from "../assets/Screenshot_recipies.png";
import screenshotDJ from "../assets/Screenshot_DJ.png";
import "./Card.css";

function ProfileCard () {
    return(
        <>
        <h2 className="Title">Portfolio</h2>
        <div className="ProfileCard">
            <Profile screenshot={screenshotBhromaon} name={"Bhromaon"} repo={"https://github.com/Alva-projects/bhromaon.git"} techUsed= {"This project was created with a time limit using HTML and CSS5."} writeUp= {"The project initially did not go as i planned it too. I tried to create all of the home page rather than only having time to create one part leaving the othe parts blank. It was a good challange wich made me practice prioritizing."}/>
            <Profile screenshot={screenshotRecepies} name={"Recepies"} repo={"https://github.com/Alva-projects/assignment-7.version1.0.git"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
            <Profile screenshot={screenshotDJ} name={"DJ"} repo={"https://github.com/MPLarsson/Group-Project.git"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
        </div>
        </>
    )
}

export default ProfileCard;