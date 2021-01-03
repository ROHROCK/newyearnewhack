import React from 'react'
import ReactLogo from '../Assets/Icons/techicons/react.svg';
import FirebaseLogo from '../Assets/Icons/techicons/firebase.svg';
import NpmLogo from '../Assets/Icons/techicons/npm.svg';
import CssLogo from '../Assets/Icons/techicons/css.svg';
import HtmlLogo from '../Assets/Icons/techicons/html.svg';

function About() {
    return (
        <div style={{color:"white",display:'flex',height:"90vh",flexDirection:"column",padding:"3vh"}}>
            <div style={{backgroundColor:"green",height:"20vh",textAlign:"center"}}>
                <h1>Welcome to Fortune Teller "Add globe emoji here"!</h1>
                <h2>This is project is inspired by the New year new hack conducted by MLH </h2>
                {/* eslint-disable-next-line */}
                <a href="#"><p>Click Here to learn more</p></a>
            </div>
            <div id="techStack">
                <h1>Tech stack used</h1>
                <img src={ReactLogo} style={{width:'10vh',height:'10vh'}} alt='reactlogo' />
                <img src={FirebaseLogo} style={{width:'10vh',height:'10vh'}} alt='firebaselogo'/>
                <img src={NpmLogo} style={{width:'10vh',height:'10vh'}} alt='npmlogo'/>
                <img src={CssLogo} style={{width:'10vh',height:'10vh'}} alt='csslogo'/>
                <img src={HtmlLogo} style={{width:'10vh',height:'10vh'}} alt='htmllogo'/>
            </div>
            <div id="creator">
                <h1>Meet the Creators !</h1>
            </div>
        </div>
    )
}

export default About
