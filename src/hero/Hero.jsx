import  { Component } from 'react';
import "./Hero.css";
class Hero extends Component {
    state = { 
        images:["/images/addidas.svg", "/images/puma.svg", "/images/fila.svg", "/images/nike.svg"],

     } 

    render() { 
        return (
            <section className='hero' id='hero'>
                <div className="container-fluid w-100 h-100">
                <div className="row h-100 ">
  <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-center">
    <div className="intro d-flex justify-content-center flex-column w-100 p-3">
      <small className="mb-3">new collections</small>
      <h1 className="mb-5">Find All What You Want For <span>Sports</span> </h1>
      <p className='mb-5 '>
        Browse from our divers collections for sports clothes and equipments
        which match your style and needs.
      </p>
      <button>Shop Now</button>
      <div className="numbers d-flex mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center first">
          <h2 className='fw-bold'>500+</h2>
          <p>international brands</p>
        </div>
        <div className="ms-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className='fw-bold'>2500+</h2>
          <p>High-Quality products</p>
        </div>
      </div>
      
    </div>
  </div>

  <div className="col-lg-8 col-md-12 col-sm-12 p-0 d-flex align-items-stretch ii">
   <div className="imgcontainer d-flex justify-content-end">
    <img src="/public/images/Frame 45.png" alt="" />
   </div>
  </div>
</div>

<div className="slider-container">
        <div className="slider-track">
          {this.state.images.concat(this.state.images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt="brand"
              className="slider-image"
            />
          ))}
        </div>
      </div>

    </div>

            </section>
        );
    }
}
 
export default Hero;