import React from 'react';
import fristm from './images/1.jpg';
import secondm from './images/2.jpg';
import thirdm from './images/3.jpg';
import NavbarSchool from './NavbarSchool';
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from 'react';
import noteContext from '../context/portels/portelContext';
import { useEffect} from 'react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import Footer from './Footer';
function Fristpage() {
    const use =useContext(noteContext);
    const {active,fetchactivites}=use;

    useEffect(() => {
        
            
            fetchactivites();
              /* eslint-disable react-hooks/exhaustive-deps */
      
    }, []);
    // console.log(active);
    return (
        <div>
            <NavbarSchool />
            <div id="home" className="container-fluid bg-light">
                <div className="row p-0">
                    <div className="col-md-12 p-0">
                        <div id="car" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#car" data-slide-to="0" className="active"></li>
                                <li data-target="#car" data-slide-to="1" ></li>
                                <li data-target="#car" data-slide-to="2" ></li>
                                {/* <li data-target="#car" data-slide-to="3" ></li>
                                <li data-target="#car" data-slide-to="4" ></li> */}

                            </ol>
                            <div className="carousel-inner p-0">
                                <div className="carousel-item active" >
                                    <img src={fristm} className="d-block w-100" style={{ height: "450px" }} alt="" />
                                    <div className="carousel-caption">


                                    </div>
                                </div>
                                <div className="carousel-item" >
                                    <img src={secondm} className="d-block w-100" style={{ height: "450px" }} alt="" />
                                    <div className="carousel-caption">

                                    </div>
                                </div>
                                <div className="carousel-item"  >
                                    <img src={thirdm} className="d-block w-100" style={{ height: "450px" }} alt="" />
                                    <div className="carousel-caption">


                                    </div>
                                </div>

                                <a href="#car" className="carousel-control-prev" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a href="#car" className="carousel-control-next" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light container-fluid" >
                <div className="row">
                    <h3 className='mt-3'>Activities</h3>
                    <div className="col-12 text-center mt-3 mb-5">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={8}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={
                                {
                                    400: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    //   1024: {
                                    //     slidesPerView: 3,
                                    //     spaceBetween: 30,
                                    //   }
                                }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {active.map((active) => {

                                return <SwiperSlide  className='rounded-3 border shadow-ld' key={active._id}>
                                    <div class="card w-100 m-0 p-0" style={{height:"500px"}}>
                                        <img src={active.photof} class="card-img-top img-fluid w-100" style={{height:"400px"}} alt="..." />
                                        <div class="card-body">
                                            <h3 className='card-title'>{active.fristheading}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })

                            }

                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Fristpage;
