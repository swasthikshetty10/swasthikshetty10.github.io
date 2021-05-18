
import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Dev from "../../Images/Background/Developer.svg"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
function About() {

    return (
        <section id = "about" className = "bg-gray-900 lg:h-screen">
        
        <div className=" text-indigo-200 body-font p-5">
            <div id= "about" className = "mt-10 text-center">
            <Bounce top>
                <div className="center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <h1 className="block xl:inline">About Me</h1>
                
                </div>
            </Bounce>
            </div>
            
            <div className = "flex">
               <Slide left> 
                   <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                    
                        <img className="object-cover object-center rounded" alt="hero" src={Dev} />
                
                    </div>
                </Slide>
                <div >
                <div>
                    <div className="mx-auto flex px-5  sm:flex-row flex-col items-center ">
                        <div className="flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">          
                                <div className="pt-10 px-2 sm:px-6">      

                                    <Slide right> 
                                        <p className="lg:mt-10 text-indigo-200 text-base pb-6">
                                            Hi I am Swasthik Shetty, self taught programmer learning and exploring new technologies, I love to contribute to open-source projects and community , I enjoy being challenged and engaging with projects that enables me to learn new skills; 
                                            </p>
                                    </Slide>
                                    <Slide right> 
                                        <p className="lg:mt-5 text-indigo-200 text-base pb-8">
                                        I am First-yest student pursuing bachelors of degree in Computer Science and Engineering at NMAM Institute of Technology 
                                            </p>
                                    </Slide>
                                    <Slide bottom className = "flex-column italic">
                                        <div className="lg:mt-10 flex-column lg:flex items-center justify-right  text-white">
                                            <div  className = "pr-10 lg:pr-20">
                                                <span className = "text-pink-600"><ArrowRightIcon/> </span> Birthday : <span>10 sept 2002 ; </span>
                                            </div>
                                            <div>
                                            <span className = "text-pink-600"><ArrowRightIcon/> </span>Age : <span>18 ; </span>
                                            </div>
                                        </div>
                                        <div className="lg:flex items-center justify-right  text-white">
                                            <div  className = "pr-10 lg:pr-20">
                                                <span className = "text-pink-600"><ArrowRightIcon/> </span> City : <span>Udupi, Karnataka ; </span>
                                            </div>
                                            <div>
                                            <span className = "text-pink-600 "><ArrowRightIcon/> </span>Email : <span>swasthikshetty10902@gmail.com ; </span>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
