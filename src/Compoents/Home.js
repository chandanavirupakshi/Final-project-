import React from "react";
import './Styles/Home.css';
import { Carousel } from "react-bootstrap";
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="carousel">
                <Carousel>
                    <Carousel.Item><img src={img1} alt="First slide" />
                        <Carousel.Caption className="slide-text">
                  <div className="carousel-caption text-white bg-secondary  bg-gradient">
              <h3>FIND YOUR DREAM JOB</h3>
              <p>
                You are not limited to your city for boring jobs. You can use
                TopJobs portal for suitable jobs in easy way across the country.
              </p>
            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item><img src={img2} alt="Second slide" />
                        <Carousel.Caption className="slide-text">
                        <div className="carousel-caption text-white bg-secondary  bg-gradient">
                            <h1>REGISTER WITH US</h1>
                            <p>Lots of openings are coming soon.
                            </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item><img src={img3} alt="Thrid slide" />
                        <Carousel.Caption className="slide-text">
                        <div className="carousel-caption text-white bg-secondary  bg-gradient">
                            <h1>MOVE AHEAD IN CARRER</h1>
                            <p>Apply from us and boost your job search.
                            </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

           
            <div className="display-2 py-5  text-center">
                <button
                    type="button"
                    className=" btn-skew py-3"
                    onClick={() =>

                        navigate("/jobs")
                    }
                >
                    Jobs
                </button>
               
                <button
                    type="button"
                    className=" btn-skew mx-4 py-3"
                    onClick={() =>

                        navigate("/contact")
                        
                    }
                >
                    ContactUs
                </button>

                <button type="button" className=" btn-skew py-3">
                    Coming Soon
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Home;