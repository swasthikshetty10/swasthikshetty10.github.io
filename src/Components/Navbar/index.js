/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../Images/Logo/logo.svg'
import ChatIcon from '@material-ui/icons/Chat'
import navigations from "./Navigations"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar({ sections }) {
  const Home = useRef()
  const About = useRef()
  const Skills = useRef()
  const Projects = useRef()
  const Contact = useRef()
  const navigation = navigations({
    home: true,
    Home: Home,
    About: About,
    Skills: Skills,
    Projects: Projects,
    Contact: Contact
  })
  const setActiveNav = (props) => {
    Home.current.className = classNames(
      props.home ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'px-3 py-2 rounded-md text-sm font-medium'
    )
    About.current.className = classNames(
      props.about ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'px-3 py-2 rounded-md text-sm font-medium'
    )
    Skills.current.className = classNames(
      props.skills ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'px-3 py-2 rounded-md text-sm font-medium'
    )
    Projects.current.className = classNames(
      props.projects ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'px-3 py-2 rounded-md text-sm font-medium'
    )
    Contact.current.className = classNames(
      props.contact ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'px-3 py-2 rounded-md text-sm font-medium')
  }
  const secRefs = sections()
  window.addEventListener('scroll', () => {
    if (secRefs.Contact.current.offsetTop < window.pageYOffset) {
      console.log("Contact")
      if (Contact.current) {
        setActiveNav({ contact: true })
      }

    }
    else if (secRefs.Projects.current.offsetTop < window.pageYOffset) {
      console.log("Projects")
      if (Projects.current) {
        setActiveNav({ projects: true })
      }

    }
    else if (secRefs.Skills.current.offsetTop < window.pageYOffset) {
      console.log("Skills")
      if (Skills.current) {
        setActiveNav({ skills: true })
      }

    }

    else if (secRefs.About.current.offsetTop < window.pageYOffset) {
      console.log("About")
      if (About.current) {
        setActiveNav({ about: true })
      }

    }
    else if (secRefs.Home.current.offsetTop < window.pageYOffset) {
      console.log("Home")
      if (Home.current) {
        setActiveNav({ home: true })
      }

    }
  })

  return (
    <Disclosure as="nav" className="sticky top-0 z-20 w-full bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-10 w-auto"
                    src={Logo}
                    alt="Swasthik Shetty"
                  />

                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        id={item.name + "Nav"}
                        href={item.href}
                        ref={item.ref}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium', `${item.name}_tab`
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://wa.link/xcfy4e" className="text-sm font-medium block lg:block  p-2  text-gray-300 hover:text-white focus:outline-none">
                  <span className="sr-only">Chat with me</span>
                  <ChatIcon />
                </a>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium', `${item.name}_tab`
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
