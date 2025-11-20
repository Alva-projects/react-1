// import React from "react";

function PopupWindow (name, link) {
    return (
        <div className="popup-window">
            <h1 className="name">{name}</h1>
            <p className="link">{link}</p>
            <button className="btn-close" onClick={onClick}>
                Close window
            </button>
        </div>

    )

}

export default PopupWindow;