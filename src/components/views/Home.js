import React from "react";
import Nav from "../Nav";
import { Outlet, useNavigate } from "react-router-dom";
import "./main.style.css"

function Home(){
    return (
        <div className="home">
            <Nav/>
            <Outlet/>
            
        </div>
    )
}
export default Home;
