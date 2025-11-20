import "../styles/Project.css";
import screenshotBhromaon from "../../assets/ScreenshotBhromaon.png";
import screenshotRecepies from "../../assets/Screenshot_recipies.png"; 
import screenshotDJ from "../../assets/Screenshot_DJ.png";

function Project ({screenshot, name, link, techUsed, writeUp}) {
    return(
        <>
            <div className="profile_card">
                <img src={screenshot} alt="" className="image"/>
                <div className="info">
                    <h2 className="title">{name} </h2>
                    <a href={link} className="link" target="_blank" >Git Hub repo</a>
                    <p className="tech">{techUsed}</p>
                    <p className="description">{writeUp}</p>
                </div>
            </div>
            </>
    )
}

export default Project;