import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useCart from '../../hooks/useCart';


const Service = (props) => {
    const {name,img,description,_id,key} = props.service;
    // const [cart, setCart] = useCart([]);
    

  





    //   const handleAddToCart = (product) => {
    //     const exists = cart.find(pd => pd.key ===product.key);
    //     // console.log("exist",exists)
    //     let newCart = [];
    //     if (exists) {
    //         const rest = cart.filter(pd => pd.key !==product.key);
    //         // exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, product];
    //     }
    //     else {
    //         // product.quantity = 1;
    //         newCart = [...cart, product];
    //     }
    //     setCart(newCart);
        
    //     addToDb(product.key);

    // }


    // onClick={()=>handleAddToCart(props.service)}
  







    return (
        <div>
        <Col className='h-100'>
      <Card className='p-3 shadow h-100'>
        <Card.Img style={{height:"300px" , borderRadius:"5px"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{fontFamily:' Georgia'}}>{name}</Card.Title>
          <Card.Text style={{fontFamily:' Times New Roman'}}>
           {description}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <Link to={`/order/${_id}`}>
          <Button variant="outline-success" className="mt-3"  style={{fontFamily:'Copperplate'}}>Book Now</Button>
          </Link>
        </Card.Footer>
        
          
      </Card>
    </Col>
            
        </div>
    );
};

export default Service;