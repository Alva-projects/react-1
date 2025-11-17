import Profile from "./components/profile.jsx";
import screenshot from "./assets/screenshot.jpg";

function App() { //This is a React component. They are like parent functions, so I can make new functions inside of it.
    return(
        <>
            <Profile screenshot ={screenshot} name={"Project 1"} repo={"www.Github.com"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
            <Profile screenshot ={screenshot} name={"Project 2"} repo={"www.Github.com"} techUsed= {"It was difficult"} writeUp= {"Interesting"}/>
            <Profile screenshot ={screenshot} name={"Project 3"} repo={"www.Github.com"} techUsed= {"Describe"} writeUp= {"Lorem ipsum"}/>
        </>
        //Save data as array
    )
}

export default App;
