import React from "react";
import ReactDOM from 'react-dom';
import { Inp } from "../../Components/Atoms/Input";




it("renders without crashing" ,()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Inp/>,div)
})