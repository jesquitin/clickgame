import React from "react";
import  "./Navbar.css"
function Navbar(props) {
    return(
        <div className="navbar-fixed  ">
           <nav>
               <div className="nav-wrapper blue ">
                    <a style={{cursor: "pointer"}} className="left" onClick={() =>
                        {document.getElementsByClassName("instructionsModal")[0]
                        .classList.remove("hide"); }}>Mobsters</a>
                    <a href="/" className="brand-logo  center">Click Memory Game</a>
                 <ul className="right">
                    <li >Score: {props.score} </li>
                    <li style={{paddingRight: "20px"}}>Top Score: {props.topScore} </li>
                 </ul>
               </div>
           </nav>
        </div>
    )
}

export default Navbar;