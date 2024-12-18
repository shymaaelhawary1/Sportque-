import { Component } from 'react';
import "./Sale.css";

class Sale extends Component {
    state = {  } 
    render() { 
        return (

            <section className="onSale mt-5 " id='sale'>
                <div className="container">
                    <div className="content d-flex flex-column align-items-center h-100 w-100">
                        <h1 className='mb-5'>onSale</h1>
                        <div className="row w-100 h-100 d-flex justify-content-center">
                            <div className="col-lg-3 col-md-6 col-sm-12">

                        <div className="card d-flex flex-column">
                            <div className="discount position-relative ">
                                <h4 className='text-white bg-danger py-1 px-2'>50%</h4>
                                <div className="img-container w-100 h-100 d-flex justify-content-center">
                                <img src="/public/images/shoes (1).png" className=' object-fit-cover h-100' alt="" /></div>
                            </div>
                            <div className="info p-2">
                                <h3>Sneakers</h3>
                                <div className="RatingIcons d-flex text-warning gap-1">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>
                                <div className="price d-flex justify-content-between">
                                    <p className='fs-5'><del>400</del></p>
                                    <p className='text-success fw-bold fs-3'>200<span className='text-success fw-bold'>$</span></p>

                                </div>
                                <div className="d-flex justify-content-center w-100">
                                <button >Buy Now</button>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

<div className="card ">
    <div className="discount bg-danger ">
        <h4 className='text-white p-2'>50%</h4>

    </div>
</div>
                           </div>
                       <div className="col-lg-3 col-md-6 col-sm-12">

<div className="card ">
    <div className="discount bg-danger ">
        <h4 className='text-white p-2'>50%</h4>

    </div>
</div>
                           </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">

<div className="card ">
    <div className="discount bg-danger ">
        <h4 className='text-white p-2'>50%</h4>

    </div>
</div>
                          </div>
                        </div>
                        <button className='viewBtn fw-bold py-1 px-3 mt-4'>View More</button>
                    </div>
                </div>

            </section>








        );
    }
}

export default Sale;