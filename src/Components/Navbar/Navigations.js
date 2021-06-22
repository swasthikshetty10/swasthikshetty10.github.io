export default function navigations(props) {
    return [
        { name: 'Home', href: '#', current: props.home },
        { name: 'About', href: '#about', current: props.about },
        { name: 'Skills', href: '#skills', current: props.skills },
        { name: 'Projects', href: '#projects', current: props.projects },
        // { name: 'Project Request', href: '/freelance', current: false },
        { name: 'Contact', href: '#contact', current: props.contact },
    ]
}