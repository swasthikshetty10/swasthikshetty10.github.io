import react, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ProjectRequest from './Components/ProjectRequest'
import Login from './Components/ProjectRequest/Auth/Login'
import Logout from './Components/ProjectRequest/Auth/Logout'
import SignUp from './Components/ProjectRequest/Auth/SignUp'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from './Context/auth-context'
const HomePage = () => {

  const SecAbout = useRef()
  const SecHome = useRef()
  const SecSkills = useRef()
  const SecProjects = useRef()
  const SecContact = useRef()
  const sections = () => {
    return {
      Home: SecHome,
      About: SecAbout,
      Skills: SecSkills,
      Projects: SecProjects,
      Contact: SecContact
    }
  }
  return <>
    <Navbar sections={sections} />
    <Home secRef={SecHome} />
    <About secRef={SecAbout} />
    <Skills secRef={SecSkills} />
    <Projects secRef={SecProjects} />
    <Contact secRef={SecContact} />
    <Footer />
  </>
}
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/project" component={ProjectRequest} />
          <Route path="/hireme" component={ProjectRequest} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
