import React from 'react';
import './Food.css'
const Food = (props) => {
    console.log(props.food)
    const{strMealThumb,strMeal,strInstructions}=props.food
    return (
        <div className='col-md-4 col-lg-4 col-12'>
            <div className=" food-bg">
                <div className="img">
                    <img src={strMealThumb} alt="" />
                </div>
                <div className="food-text">
                    <h3>Food Name:strMeal{strMeal}</h3>
                    <p>{strInstructions.slice(0,100)}</p>
                </div>
            </div>
        </div>
    );
};

export default Food;