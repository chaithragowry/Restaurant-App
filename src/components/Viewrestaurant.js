import React ,{useState,useEffect}from 'react'
import { useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreviews from './Restreviews';
import { useSelector } from 'react-redux';

function Viewrestaurant() {
    const params=useParams()
    console.log(params.id)
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to get all restaurant list from restaurants.json
    const getRestaurant = async () => {
        await fetch('/restaurants.json')
        .then((data) =>{
          data.json()
            .then((result) => {
              setRestaurants(result.restaurants)//converts array of objects to array
        
            })
           
        })
    }
     console.log(allRestaurants);
    useEffect(()=>{
        getRestaurant();
    },[])
    console.log(allRestaurants);
    const result=useSelector(state=>state.restaurantReducer)
        console.log(result)
        const {restaurantList}=result

    const viewrest=allRestaurants.find(item=>item.id==params.id)
    console.log(viewrest)
  return (
    <>
    {
    viewrest?(
        <Row>
            <Col>
            <Image src={viewrest.photograph} fluid/>
            </Col>
            <Col>
            <p>ID : {viewrest.id}</p>
            <h3>Name : {viewrest.name}</h3>
            <h4>Neighborhood : {viewrest.neighborhood}</h4>
            <h5>Address : {viewrest.address}</h5>
            <h5>Cuisine-type : {viewrest.cuisine_type}</h5>
            <Restoperation operate={viewrest.operating_hours}/>
            <Restreviews reviews={viewrest.reviews}/>
            </Col>
        </Row>
    ):'null'
}
    </>
  )
}

export default Viewrestaurant
