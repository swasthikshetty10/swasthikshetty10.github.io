import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import LanguageIcon from '@material-ui/icons/Language';
// projects
import bcl from "../../Images/project/bclnews.png"
import chatbot from "../../Images/project/Chatbot.jpg"
import  epaxai from "../../Images/project/epaxai.png"
import  memes from "../../Images/project/memes.png"
import  chintubot from "../../Images/project/chintubot.png"



function Index() {
    const Projects = {
        all : [ 
            {name : 'News Webstie' , image : bcl , github : 'https://github.com/swasthikshetty10/News-website' , link : 'bclnews.herokuapp.com/'} ,
            {name : 'Discord Bot' , image : chintubot , github : 'https://github.com/Noob-Coders-Gang/Chintu-Bot' , link : 'chintubot.netlify.app/'} ,
            {name : 'AI Assistant' , image : epaxai , github : 'https://github.com/swasthikshetty10/EPAX-AI' , link : 'epaxai.azurewebsites.net/'} ,
            {name : 'Meme app' , image : memes , github : 'https://github.com/swasthikshetty10/Meme-App-ReactJs' , link : 'memes.upon.one'} ,
            {name : 'ChatBot' , image : chatbot , github : 'https://github.com/swasthikshetty10' , link : 'https://github.com/swasthikshetty10'} 
        ]
    }
    return (
        <section id= "projects" className = "text-gray-900 ">
            <div  className = "p-10 lg:pb-20  text-center">
            <Bounce top>
                <h1 className=" center text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Projects</span>
                
                </h1>
            </Bounce>
            </div>
            
            <div style = {{ scrollbarColor : "#4f46e5"  , maxHeight : "10px"}} className = "container mx-auto mt-5 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3  gap-10 items-center">
            {Projects.all.map( (ele) => {
                return <Card name = {ele.name} image = {ele.image} github = {ele.github} link = {ele.link}   />
            })}
            </div>
            
            

               
        </section>
    )
}

export default Index


const Card = (props) => { return <div className="card">
   
<div className="imgBx">
    <img src= {props.image} alt= {props.name}/>
</div>
<div className="details">
    <h2>{props.name}<br/><span  > <a href= {props.github} ><GitHubIcon  />  </a> <a href = {props.link}> <LanguageIcon/></a> </span> </h2>
</div>
</div>}