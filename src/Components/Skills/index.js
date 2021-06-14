
import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Dev from "../../Images/Background/Dev3.svg"

// Svg
import python from "../../Images/Skills/python.svg"
import django from "../../Images/Skills/django.svg"
import javascript from "../../Images/Skills/js.svg"
import reactjs from "../../Images/Skills/react-js.svg"
import nodejs from "../../Images/Skills/nodejs.svg"
import css from "../../Images/Skills/css3.svg"
import html from "../../Images/Skills/html-5.svg"
import bootstrap from "../../Images/Skills/bootstrap.svg"
import tailwindcss from "../../Images/Skills/tailwindcss.svg"
import firebase from "../../Images/Skills/firebase.svg"
import git from "../../Images/Skills/git.svg"
import mongodb from "../../Images/Skills/mongodb.svg"
import heroku from "../../Images/Skills/heroku.svg"
import tensorflow from "../../Images/Skills/tensorflow.svg"
import azure from "../../Images/Skills/azure.svg"
import postgresql from "../../Images/Skills/postgresql.svg"

function Index() {

    const Skills = {
        all: [{ logo: reactjs, name: "React JS" }, { logo: javascript, name: "JavaScript" }, { logo: css, name: "CSS3" }, { logo: html, name: "HTML5" }, { logo: tailwindcss, name: "Tailwind CSS" }, { name: "Bootstrap", logo: bootstrap }, { logo: django, name: "Django" }, { logo: python, name: "Python" }, { logo: nodejs, name: "Node JS" }, { logo: firebase, name: "Firebase" }, { logo: postgresql, name: "Postgresql" }, { logo: mongodb, name: "Mongo DB" }, { logo: azure, name: "Azure" }, { logo: heroku, name: "Heroku" }, { logo: tensorflow, name: "TensorFlow" }, { logo: git, name: "Git" }],
        frontend: [{ logo: reactjs, name: "React JS" }, { logo: javascript, name: "JavaScript" }, { logo: css, name: "CSS3" }, { logo: html, name: "HTML5" }, { logo: tailwindcss, name: "Tailwind CSS" }, { name: "Bootstrap", logo: bootstrap }],
        backend: [{ logo: django, name: "Django" }, { logo: python, name: "Python" }, { logo: nodejs, name: "Node JS" }, { logo: firebase, name: "Firebase" }, { logo: mongodb, name: "Mongo DB" }],
        database: [{ logo: mongodb, name: "Mongo DB" }, { logo: firebase, name: "Firebase" }, { logo: postgresql, name: "Postgresql" }],
        cloud: [{ logo: azure, name: "Azure" }, { logo: heroku, name: "Heroku" }, { logo: mongodb, name: "Mongo DB" }, { logo: firebase, name: "Firebase" }],
        others: [{ logo: tensorflow, name: "TensorFlow" }, { logo: git, name: "Git" }]
    }
    const SkillCard = (props) => {
        return (

            <div className=" p-7 flex flex-col text-center text-gray-900 text-md ">
                <div className="flex justify-center ">
                    <img className="center h-12 w-auto select-none  " src={props.logo} ></img>
                </div>
                <span className="p-2">{props.name}</span>
            </div>

        )
    }
    const [toFilter, setFilter] = useState(Skills.all)
    return (
        <section id="skills" className="text-gray-900  lg:h-screen">

            <div className="  body-font p-5 ">
                <div id="about" className="mt-10 text-center">
                    <Bounce top>
                        <div className="center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <h1 className="block xl:inline">Skills</h1>

                        </div>
                    </Bounce>
                </div>

                <div className="flex justify-evenly gap-10 ">
                    <div className="">
                        <Slide left>
                            <select onChange={(event) => { setFilter(JSON.parse(event.target.value)) }} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-1 rounded outline-none" >
                                <option value={JSON.stringify(Skills.all)}>All</option>
                                <option value={JSON.stringify(Skills.frontend)}>Frontend</option>
                                <option value={JSON.stringify(Skills.backend)}>Backend</option>
                                <option value={JSON.stringify(Skills.cloud)}>Cloud</option>
                                <option value={JSON.stringify(Skills.database)}>Database</option>
                                <option value={JSON.stringify(Skills.others)}>Others</option>
                            </select>

                            <div style={{ scrollbarColor: "#4f46e5", maxHeight: "60vh" }} className="skillscroll overflow-y-scroll mx-auto mt-5 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3   items-center ">

                                {toFilter.map((e) => {
                                    return <SkillCard logo={e.logo} name={e.name} />
                                })}
                            </div>
                        </Slide>
                    </div>

                    <Slide right>

                        <div className="lg:max-w-lg lg:w-lg md:w-1/2 w-5/6 sm:block hidden">

                            <img className="object-cover object-center rounded select-none" alt="hero" src={Dev} />

                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default Index
