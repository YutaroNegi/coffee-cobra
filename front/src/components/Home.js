import React from "react";
import { Link } from 'react-router-dom'

function Home (props){
    return(
        <div className={`calcDiv ${props.className}`}>
            <h2 className="menuTitle">Welcome to <span className="strongWord">Coffee Cobra</span></h2>
            <h3 className="calcTitle">How to use?</h3>

            <span className="tutorialItem">Classic <span className="strongWord">Single Cup Of Coffee</span> is <span className="strongWord">200ml</span> of <span className="strongWord">Water</span> and <span className="strongWord">14g</span> of <span className="strongWord">Coffee</span>, beeing a <span className="strongWord">1:14 ratio</span></span>
            <br></br>
            <span className="tutorialItem">If you want a <span className="strongWord">Stronger</span> cup, you should <span className="strongWord">Decrease the Ratio</span></span>
            <span className="tutorialItem">If you want a <span className="strongWord">Lighter</span> cup, you should <span className="strongWord">Increase the Ratio</span></span>
            <br></br>
            <span className="tutorialItem">Usually the <span className="strongWord">Ratio</span> is displayed like this: <span className="strongWord">1:14</span>, but here we <span className="strongWord">ignore the left number!</span></span>
            <span className="tutorialItem">So the <span className="strongWord">1:14 Ratio</span> is a <span className="strongWord">14 Ratio</span> here</span>
            <br></br>
            <span className="tutorialItem">if you know how much <span className="strongWord">Water</span> and <span className="strongWord">Ratio</span> you want to use, you should <Link to="/coffee" id="coffee" className="strongWord hoverPointer">Calc Coffee</Link></span>
            <span className="tutorialItem">if you know how much <span className="strongWord">Coffee</span> and <span className="strongWord">Ratio</span> you want to use, you should <Link to="/water" id="water"  className="strongWord hoverPointer">Calc Water</Link></span>
            <span className="tutorialItem">if you know how much <span className="strongWord">Coffee</span> and <span className="strongWord">Water</span> you want to use, you should <Link to="/ratio" id="ratio" className="strongWord hoverPointer">Calc Ratio</Link></span>
        </div>
    )

}

export default Home