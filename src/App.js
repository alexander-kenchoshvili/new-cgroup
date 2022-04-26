import './App.css';
import Loading from './components/loader/Loading';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import FixedAdd from './components/fixed-address/FixedAdd';
import FixedSocial from './components/fixed-social/FixedSocial';
import Contact from './components/contact/Contact';
import Services from './components/Services/Services';
import Project from './components/Project/Project';
import About from './components/about/About';
import InnerBlog from './components/InnerBlog/InnerBlog';






function App() {
 
  return (
    <Router>
      <div className="App">
        <Loading/>
        <Header />
        <FixedAdd />
        <FixedSocial />
        <Routes>
          <Route  path='/' exact element={<HomePage/>} />
          <Route  path='contact' exact element={<Contact/>} />
          <Route  path='services' exact element={<Services />} />
          <Route  path='projects' exact element={<Project />}  />
          <Route  path='about' exact element={<About />} />
          <Route  path='InnerBlog' exact element={<InnerBlog/>} />
        </Routes>
        <Partners />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
