import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home}/>
                    <Route path="/project" element={Project}/>
                    <Route path="/contact" element={Contact}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;
