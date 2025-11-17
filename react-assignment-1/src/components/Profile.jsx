import "./profile.css"


function Profile ({screenshot, name, repo, techUsed, writeUp}) { //Needs a capital letter to start
    return(
        <>
            <img src={screenshot} alt="Profile picture"/>
            <h2>{name}</h2>
            <p>{repo}</p>
            <p>{techUsed}</p>
            <p>{writeUp}</p>
        </>
    )

}

export default Profile; //This only lets me export one function per file