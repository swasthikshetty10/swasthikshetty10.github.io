import react from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ProjectRequest from './Components/ProjectRequest'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const HomePage = () => {
  return <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>
}
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/project" component={ProjectRequest} />
        <Route path="/hireme" component={ProjectRequest} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
