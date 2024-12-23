import { Component } from 'react';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Sale from './sale/Sale';
import Categories from './categories/Categories';
import Reviews from './reviews/Reviews';
import Footer from './footer/Footer';
class HomePage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <Hero/>
            <Sale/>
            <Categories/>
            <Reviews/>
            <Footer/>
            
            </>
        );
    }
}
 
export default HomePage;