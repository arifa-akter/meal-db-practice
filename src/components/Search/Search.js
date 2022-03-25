import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './Search.css'
import { FormControl, InputGroup } from 'react-bootstrap';
import Food from '../Food/Food';


const Search = () => {
   const [food , setFood] = useState([])
   const [name , setName] = useState('')
   const[foods, setFoods] = useState([])

   function getData(val){
    const inputField = val.target.value
    setName(inputField)
    }
   useEffect(() =>{ 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(response => response.json())
    .then(data=>{
        // console.log(data.meals)
        setFood(data.meals)
      })
    },[name])
    const foodInfo =(food)=>{
        setFoods(food)
    }
    return (
  <div className='container'>
    <div className="input-field">
    <InputGroup className="mb-3 container" >
     <FormControl
          value ={name}
          onChange={getData}
          placeholder="search food"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
     />
     <Button variant="outline-secondary" id="input-button" onClick={()=>foodInfo(food)}>
      search
     </Button>
     </InputGroup>
    </div>
    <section>
    <div className=" row all-product">
     <div className="food col-md-9 col-lg-9 col-9">
       <div className="row">
         {
             foods.map(food=><Food 
                key={food.idMeal}
                food ={food}></Food>)
         }
        </div>
       </div>
         <div className="cart col-md-3 col-lg-3 col-3"></div>
        </div>
    </section>


     </div>

    );
};

export default Search;