import Profile from "Pages/Profile.jsx";
import screenshotBhromaon from "./assets/screenshotBhromaon.png";
import screenshotRecepies from "./assets/Screenshot_recipies.png";
import screenshotDJ from "./assets/Screenshot_DJ.png";
import "./styles/Card.css";

function ProfileCard () {
    return(
        <>
            <h2 className="Title">Portfolio</h2>
            <div className="ProfileCard">
                <Profile screenshot={screenshotBhromaon} name={"Bhromaon"} link={"https://github.com/Alva-projects/bhromaon.git"} techUsed= {"This project was created with a time limit using HTML and CSS5."} writeUp= {"The project initially did not go as i planned it too. I tried to create all of the home page rather than only having time to create one part leaving the othe parts blank. It was a good challange wich made me practice prioritizing."}/>
                <Profile screenshot={screenshotRecepies} name={"Recepies"} link={"https://github.com/Alva-projects/assignment-7.version1.0.git"} techUsed= {"Media queries were used to make the website dynamic."} writeUp= {"This was my first responsive website which was a good challange."}/>
                <Profile screenshot={screenshotDJ} name={"DJ Service"} link={"https://github.com/MPLarsson/Group-Project.git"} techUsed= {"The gallery is created using a grid"} writeUp= {"I created the Gallery page for this project."}/>
            </div>
        </>
    )
}

export default ProfileCard;

        