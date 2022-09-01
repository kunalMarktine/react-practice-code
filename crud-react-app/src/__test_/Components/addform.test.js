import React from "react";
import {createRoot} from 'react-dom';
import Addfrom from "../../Components/Molecules/Addfrom";





it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<Addfrom/>,div)
})