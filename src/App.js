import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About'
import Home from './components/Home';
import Contact from './components/Contact'
import Projects from './components/Projects'
import Blog from './components/Blog'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
