import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Restreviews({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews)
  return (
    
    
        <><Button variant="dark" className='m-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            reviews.map(item=>(
            
            <>
            <p className='mt-4'>{item.name} <span> {item.date}</span></p>
            <h5>Rating : {item.rating}</h5>
            <h6>Comments : {item.comments}</h6>
            </>
            
            ))
}
          
            </div>
      </Collapse>
    </>
  )
    
    
    

}

export default Restreviews