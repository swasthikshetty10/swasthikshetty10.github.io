import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Form from "./Form"
import ContactCard from "./ContactCard"
import Chat from "../../Images/Background/contact.svg"

function Index() {
    return (
        <section  id = "contact" className = "lg:mt-10 bg-gray-900 pb-10" >
            <div id= "about" className = "mt-20 text-center">
            <Bounce top>
                <h1 className="center text-4xl tracking-tight font-extrabold p-10 text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Contact</span>
                
                </h1>
            </Bounce>
            </div>

            <div className = "flex sm:flex-row flex-col justify-evenly">

            
            <div className = "flex flex-col justify-evenly">
                <ContactCard/>
                    <Slide left> 
                   <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                    
                        <img className="object-cover object-center rounded" alt="hero" src={Chat} />
                
                    </div>
                    </Slide>
                </div>
         
            
          
            <Form />
            
            
            </div>
           
      
        
        </section>
    )
}

export default Index
