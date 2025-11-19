import "../styles/Profile.css"
// import { href } from react-router-dom;


function Profile ({screenshot, name, link, techUsed, writeUp}) { //Needs a capital letter to start
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

export default Profile; //This only lets me export one function per file