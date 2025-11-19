// import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfileCard from "./ProfileCard.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";

function App() { //This is a React component. They are like parent functions, so I can make new functions inside of it.
    return(
        <>
            <ProfileCard/>
            <Home/>
            <Contact/>
        </>
        //Save data as array
    )
}

export default App;
