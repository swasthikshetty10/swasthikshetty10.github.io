import { Menu, Transition } from '@headlessui/react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DvrIcon from '@material-ui/icons/Dvr';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core'
export default function MyDropdown(props) {
    const menuItems = [
        { icon: <ShoppingCartIcon />, name: 'My Orders', href: '/orders' },
        { icon: <DvrIcon />, name: 'Monitor', href: '/Monitor' },
        { icon: <SettingsIcon />, name: 'Settings', href: '/settings' },
        { icon: <ExitToAppIcon />, name: 'Logout', href: '/logout' },

    ]
    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button className="text-center rounded text-white focus:outline-none "><Avatar src={props.avatar} /></Menu.Button>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className="absolute flex flex-col font-medium  px-2 py-2 shadow-lg rounded-md gap-2 bg-white right-0 ">
                            {menuItems.map((item) => {
                                return <Menu.Item>
                                    <div className="flex gap-2 justify-start px-3 py-1  rounded-md text-black hover:bg-indigo-500 hover:text-white">
                                        {item.icon}
                                        <a className='w-20 ' href={item.href}>
                                            {item.name}
                                        </a>
                                    </div>
                                </Menu.Item>
                            })}

                        </Menu.Items>
                    </Transition>

                </>

            )}

        </Menu>
    )
}