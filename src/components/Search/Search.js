import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Search = () => {
   const [food , setFood] = useState([])
   const [name , setName] = useState('')
//    console.log(food)
   function getData(val){
    const inputField = val.target.value
    setName(inputField)
    }
   useEffect(() =>{ 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(response => response.json())
    .then(data=>setFood(data))
   },[name])
    const foodInfo =(food)=>{
    console.log(food)
}
    return (
        <div>
     <InputGroup className="mb-3 container" >
     <FormControl
          value ={name}
          onChange={getData}
          placeholder="search food"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
     />
     <Button variant="outline-secondary" id="input-button" onClick={()=>foodInfo(food)}>
      Button
    </Button>
     </InputGroup>
        </div>
    );
};

export default Search;