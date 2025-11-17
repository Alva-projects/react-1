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
            <Profile screenshot={screenshotBhromaon} name={"Bhromaon"} repo={"Lorem"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
            <Profile screenshot={screenshotRecepies} name={"Recepies"} repo={"Lorem"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
            <Profile screenshot={screenshotDJ} name={"DJ"} repo={"Lorem"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
        </div>
        </>
    )
}

export default ProfileCard;