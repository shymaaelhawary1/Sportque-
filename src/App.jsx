import './App.css'
import Categories from './categories/Categories';
import Footer from './footer/Footer';
import Hero from './hero/Hero'
import Navbar from './navbar/Navbar'
import Reviews from './reviews/Reviews';
import Sale from "./sale/Sale";



function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Sale/>
    <Categories/>
    <Reviews/>
    <Footer/>
    </>

  )
}

export default App
