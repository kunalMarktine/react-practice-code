import React from "react";
import {createRoot} from 'react-dom';
import EditModal from "../../Components/Molecules/EditModal";





it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<EditModal/>,div)
})