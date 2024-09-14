import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight} from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="banner"/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                Where Every Slice is a Masterpiece!
                </h1>
                    <p className="primary-text">
                    Welcome to the home of handcrafted, delicious pizzas
                    made from the freshest ingredients. Indulge in our mouthwatering variety and experience the perfect slice, every time.
                    </p>
                    <button className="secondary-button">
                        Order Now <FiArrowRight/>
                    </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="banner"/>
            </div>
        </div>
        </div>
    );
};

export default Home;