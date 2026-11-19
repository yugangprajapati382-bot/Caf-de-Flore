import React from "react";
import "./Len.css";

import coffeeImage from "./home-image-1.png";
import cakeImage from "./home-image-2.png";

function Len() {
    return (
        <section className="cafe-menu-sections">


            <div className="cafe-menu-section coffee-section" id="coffee">

                <div className="cafe-menu-image coffee-image">
                    <img
                        src={coffeeImage}
                        alt="Beautiful cup of coffee with flowers"
                    />
                </div>

                <div className="cafe-menu-content">

                    <h2>Les notres café</h2>

                    <div className="cafe-menu-list">

                        <div className="cafe-menu-column">

                            <div className="cafe-menu-item">
                                <h3>Cappuccino</h3>
                                <p>Espresso, milk</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Caffe latte</h3>
                                <p>Espresso, milk</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Premium cappuccino</h3>
                                <p>Espresso, milk</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Premium caffe latte</h3>
                                <p>Espresso, milk</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Cinnamon latte</h3>
                                <p>Espresso, milk, cinnamon</p>
                            </div>

                        </div>

                        <div className="cafe-menu-column">

                            <div className="cafe-menu-item">
                                <h3>Irish coffee</h3>
                                <p>Espresso, whiskey, crema</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Baileys coffee</h3>
                                <p>Baileys irish cream, espresso, milk, cream</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Ice passion coffee</h3>
                                <p>Milk, coffee</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Premium caffe latte</h3>
                                <p>Espresso, milk</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Rum coffee</h3>
                                <p>Rum, espresso, chocolate, ice-cream</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div className="cafe-menu-section cake-section" id="cakes">

                <div className="cafe-menu-content">

                    <h2>Nos gâteaux</h2>

                    <div className="cafe-menu-list">

                        <div className="cafe-menu-column">

                            <div className="cafe-menu-item">
                                <h3>Cheese cake</h3>
                                <p>Cookie, cheese, raspberries</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Oreo biscuit</h3>
                                <p>Cake with Oreo</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Tiramisu</h3>
                                <p>Biscuits, cream and coffee</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Choco raspberry</h3>
                                <p>Chocolate and raspberries</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Choco tarte</h3>
                                <p>Hot chocolate cake</p>
                            </div>

                        </div>

                        <div className="cafe-menu-column">

                            <div className="cafe-menu-item">
                                <h3>Moscow cake</h3>
                                <p>Cookie, cheese, raspberries</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Vasa's cake</h3>
                                <p>Cake with Oreo</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Lemon tarte</h3>
                                <p>Biscuits, cream and coffee</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Peach cake</h3>
                                <p>Chocolate and peach</p>
                            </div>

                            <div className="cafe-menu-item">
                                <h3>Cake for two</h3>
                                <p>Hot chocolate cake with cream</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="cafe-menu-image cake-image">
                    <img
                        src={cakeImage}
                        alt="Delicious cake served on a plate"
                    />
                </div>

            </div>

        </section>
    );
}

export default Len;