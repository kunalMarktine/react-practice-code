import React from "react";
import {createRoot} from 'react-dom';
import EditForm from "../../Components/Molecules/EditForm";





it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<EditForm/>,div)
})