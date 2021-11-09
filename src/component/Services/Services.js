import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

import useFirebase from '../../hooks/useFirebase';

const Services = () => {
    const [services,setServices] = useState([])
    const {isLoading,setIsLoading}=useFirebase()
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://ghostly-castle-72423.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{setServices(data)
            setIsLoading(false);
        
        })

    },[])
    // console.log(services)
    if(isLoading===true){
        return (<Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
      </Spinner>)
            }
    
    return (
        <div  style={{marginTop:'30px' , marginBottom:'30px'}}>
            <div style={{marginTop:'30px' , marginBottom:'30px'}} >
                <h3>Our <span style={{color:'goldenrod' , fontWeight:'bold'}}>Services</span></h3>
            </div>
            <div className="container">
            <Row xs={1} md={3} className="g-4">
                {
                    services?.map(service=><Service key={service._id} service={service}></Service>)
                }
  
            </Row>
                
            </div>
            
        </div>
    );
};

export default Services;