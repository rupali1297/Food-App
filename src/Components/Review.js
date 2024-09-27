import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";

const Review = ()=>{
    return (
        <>
        <section className="review">
            <h1 className="heading">
                customer's <span>review</span> 
            </h1>

            <div className="box-container">
                {
                    review.map((item,index)=>(
                        <div className="box">
                            <img src={qouteImg} alt="" className="qoute"/>

                            <p>
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. 
                            Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus
                            Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex 
                            Aliquam Minus Vel? Nemo.
                            </p>

                            <img src={item.img} alt="" className="user"/>

                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>





                        </div>

                        


                  
                    ))
                }

            </div>
        </section>
        </>
    )
}

export default Review;