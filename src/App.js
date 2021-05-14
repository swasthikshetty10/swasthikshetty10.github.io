import react from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
function App() {
  return (
    <>
    <header className = "">
      <Navbar/>
    </header>
      <Home/>
      <About/>
      <Skills/>
    </>
  );
}

export default App;
