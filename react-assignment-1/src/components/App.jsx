// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import ProfileCard from "./ProfileCard.jsx";
// import PopupWindow from "./PopupWindow.jsx";
// <PopupWindow/>


function App() { //This is a React component. They are like parent functions, so I can make new functions inside of it.
    return(
        <>
            <Navbar/>
            <Home/>
            <Contact/>
            <ProfileCard/>
        </>
        //Save data as array
    )
}

export default App;
