import logo from './logo.svg';
import './App.css';
import Items from './Items';
import Instamart from './Instamart';
import City from './City';
import Grocery from './Grocery';
import Footer from './Footer';
import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';

function App() {
  return (
    <>
    <Home/>
    <Items/>
    <Instamart/>
    <Services/>
    <About/>
    <City></City>
    <Grocery/>
    <Footer></Footer>
    </>
  );
}

export default App;
