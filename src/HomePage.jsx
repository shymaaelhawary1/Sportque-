import { Component } from 'react';
import Hero from './hero/Hero';
import Sale from './sale/Sale';
import Categories from './categories/Categories';
import Reviews from './reviews/Reviews';
class HomePage extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Hero/>
            <Sale/>
            <Categories/>
            <Reviews/>
            </>
        );
    }
}
 
export default HomePage;