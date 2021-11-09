import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import './Orswe.css'
import { Card, Col, Row } from 'react-bootstrap';

const Order = () => {
    const {serviceId} = useParams();
    const [services] = useServices();

    let serviceToShow= services.filter(service=>service._id==serviceId)
    console.log("details of", serviceToShow)


    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // console.log(data)
        const savedCart = serviceToShow;
        data.cart = savedCart;
        data.status = false;
        // console.log(data)
        fetch('https://ghostly-castle-72423.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(data)
            

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            alert("order placed")
            reset()
        })
    };

    

    return (
        <div className='container' style={{marginTop:'70px'}}>
            <div className="row">
               <div className='col col-md-7 mt-5 rounded-3'>

          
                <Card>
                    <Card.Img variant="top" src={serviceToShow[0]?.img} />
                    <Card.Body>
                    <Card.Title>{serviceToShow[0]?.name}</Card.Title>
                      <Card.Text>
                      {serviceToShow[0]?.description}
                      </Card.Text>
                    </Card.Body>
                </Card>

                </div>
                <div className='col form-parent col-md-5 mt-5 rounded-3'>
                <form className="form mt-3" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" style={{backgroundColor:'goldenrod', color:'white', border:'1px solid grey',fontWeight:'bold'}} />
                </form>



                </div>




            </div>
            
        </div>
    );
};

export default Order;