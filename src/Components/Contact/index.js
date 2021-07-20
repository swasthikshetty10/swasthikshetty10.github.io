import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Form from "./Form"
import ContactCard from "./ContactCard"
import Chat from "../../Images/Background/contact.svg"

function Index({ secRef }) {
    return (
        <section id="contact" className="lg:mt-10 bg-gray-900 pb-10" ref={secRef} >
            <div id="about" className="mt-20 text-center">
                <Bounce top>
                    <div className="center text-4xl tracking-tight font-extrabold p-10 text-white sm:text-5xl md:text-6xl">
                        <h1 className="block xl:inline">Contact</h1>

                    </div>
                </Bounce>
            </div>

            <div className="flex sm:flex-row flex-col justify-evenly">


                <div className="flex-shrink flex flex-col justify-evenly">
                    <ContactCard />
                    <Slide left>
                        <div className="lg:max-w-lg lg:w-full sm:w-32  sm:block hidden">

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
