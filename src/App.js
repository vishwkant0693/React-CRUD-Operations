import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Contactlist from './components/contactlist/Contactlist';
import Editcontact from './components/editcontact/Editcontact';
import Searchdata from './components/searchdata/Searchdata';
import Useref from './components/useref/Useref';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='edit-user/:id' element={<Editcontact />} />
          <Route path='search' element={<Searchdata />} />
          <Route path='use-ref' element={<Useref />} />
          <Route path='contact-list' element={<Contactlist />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
