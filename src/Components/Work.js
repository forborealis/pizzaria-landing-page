import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";   

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Your Meals",
            text: "Choose from our delicious menu of freshly baked pizzas, pastas, and more. We have something for everyone!",
        },
        {
            image: ChooseMeals,
            title: "Choose Your Meals",
            text: "Customize your order with a range of toppings, sauces, and sides. Make your meal truly yours!",
        },
        {
            image: DeliveryMeals,
            title: "Delivery to Your Door",
            text: "Sit back and relax while we prepare your order with love and deliver it straight to your doorstep.",
        }
    ]
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-subeadhing">How It Works</h1>
                <p className="primary-text">
                Choose from our menu of signature pizzas or customize your
                own by selecting your favorite crust, sauce, and toppings. Place your order online or in-store, and our team will prepare it fresh,
                bake it to perfection, and have it ready for you to enjoy. 
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="work"/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
        </div>
    </div>
    );
};

export default Work;