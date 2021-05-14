import react from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
function App() {
  return (
    <>
    <header className = "">
      <Navbar/>
    </header>
      <Home/>
      <About/>
    </>
  );
}

export default App;
