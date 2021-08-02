/* This example requires Tailwind CSS v2.0+ */
import { useContext, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../Images/Logo/logo.svg'
import DropDown from './Dropdown'
import { authContext } from '../../Context/auth-context'
const navigation = [
    { name: 'ProjectRequest', href: '#', current: true },
    { name: 'Home', href: '/#', current: false },
    { name: 'About', href: '/#about', current: false },
    { name: 'Skills', href: '/#skills', current: false },
    { name: 'Projects', href: '/#projects', current: false },
    { name: 'Contact', href: '/#contact', current: false },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const isLoggedIn = false



    return (
        <Disclosure as="nav" className=" bg- w-full ">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 bg-gray-800 sm:bg-transparent sm:px-6 lg:px-8">
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
                                <div className="hidden md:block md:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}

                                    </div>
                                </div>




                            </div>
                            {isLoggedIn ? <DropDown /> : <a href="#/login" className="font-semibold text-white rounded-md hover:bg-indigo-500 bg-indigo-700 px-4 py-2 " >Login</a>}

                        </div>
                    </div>

                    <Disclosure.Panel className="bg-gray-800 md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
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
