import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';


function Restaurantlist() {
    //to hold the value
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to get all restaurant list from restaurants.json
    // const getRestaurant = async () => {
    //     await fetch('/restaurants.json')
    //     .then((data) =>{
    //       data.json()
    //         .then((result) => {
    //           setRestaurants(result.restaurants)//converts array of objects to array
    //           //console.log(result);
    //         })
    //        // console.log(data);
    //     })
    // }
     //console.log(allRestaurants);
    
        const dispatch=useDispatch()
        const result=useSelector(state=>state.restaurantReducer)
        console.log(result)
        const {restaurantList}=result
        
        useEffect(()=>{
        //getRestaurant();
        dispatch(RestaurantListAction())
    },[])

  return (
    <Row>{
    
      restaurantList.map(item=>(
        // <h4>{item.name}</h4>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Restaurantcards restaurant={item}/>
                         
        </Col>
  ))
}
</Row>
  )
}

export default Restaurantlist