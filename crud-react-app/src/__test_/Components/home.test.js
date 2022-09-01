import React from "react";
import {createRoot} from 'react-dom';
import Home from "../../Components/Elements/Home";





it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<Home/>,div)
})