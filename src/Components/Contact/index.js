import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
function Index() {
    return (
        <section  id = "contact" className = "lg:mt-10 bg-gray-900 lg:h-screen" >
             <div id= "about" className = "mt-20 text-center">
            <Bounce top>
                <h1 className="center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">About Me</span>
                
                </h1>
            </Bounce>
            </div>
            
        </section>
    )
}

export default Index
