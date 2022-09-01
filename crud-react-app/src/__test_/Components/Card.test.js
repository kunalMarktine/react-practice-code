import React from "react";
import {createRoot} from 'react-dom';
import Card from "../../Components/Molecules/Card";





it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<Card/>,div)
})