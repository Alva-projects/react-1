import "./Profile.css"


function Profile ({screenshot, name, repo, techUsed, writeUp}) { //Needs a capital letter to start
    return(
        <>
        <div className="profile_card">
            <img src={screenshot} alt="" className="image"/>
            <div className="info">
                <h2 className="title">{name} </h2>
                <p className="repo_link">{repo}</p>
                <p className="tech">{techUsed}</p>
                <p className="description">{writeUp}</p>
            </div>
        </div>
        </>
    )

}

export default Profile; //This only lets me export one function per file