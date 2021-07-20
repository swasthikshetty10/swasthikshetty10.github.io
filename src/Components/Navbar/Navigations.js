
export default function navigations(props) {

    return [
        { name: 'Home', href: '#', current: props.home, ref: props.Home },
        { name: 'About', href: '#about', current: props.about, ref: props.About },
        { name: 'Skills', href: '#skills', current: props.skills, ref: props.Skills },
        { name: 'Projects', href: '#projects', current: props.projects, ref: props.Projects },
        // { name: 'Project Request', href: '/freelance', current: false },
        { name: 'Contact', href: '#contact', current: props.contact, ref: props.Contact },
    ]
}