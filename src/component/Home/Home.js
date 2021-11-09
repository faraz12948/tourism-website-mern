import React from 'react';
import './Home.css'

import banner2 from '../../assests/images/banner2.jpg'
import banner4 from '../../assests/images/banner4.png'
import banner5 from '../../assests/images/banner5.jpg'
import Services from '../Services/Services';
import { Button, ButtonGroup, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import Guides from '../Guides/Guides';
import Blogs from '../Blogs/Blogs';


const Home = () => {
    return (
        <div>
            

              <div className="">
              <Carousel fade className="" >
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />

                 <Carousel.Caption style={{fontFamily:'Copperplate', fontWeight:'bold'}}>
                    <h3>Nature beifits you</h3>
                    <p>Experience everything nature has to offer</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Third slide"
                  />

                <Carousel.Caption style={{fontFamily:'Copperplate', fontWeight:'bold'}}>
                    <h3>Nature beifits you</h3>
                    <p>Experience everything nature has to offer</p>
                  </Carousel.Caption>
                </Carousel.Item>
</              Carousel>
              </div>




              
             
              
             


















            
           
            <div>
            <Services></Services>

            </div>
            <Guides></Guides>
            <div>
              <Blogs></Blogs>
            </div>
            <div className='container  shadow-lg mt-5' style={{width:'60%' , backgroundColor:'#E8E8E8' , padding:'30px' , marginTop:'20px' , marginBottom:'20px',borderRadius:'8px'}}>
             <h3>Contact Us</h3>
            <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Type here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="success-oulined">submit</Button>
                
            </Form>
            
                
                
            
        </div>



            <div>


           
      


            
            </div>
           
            
        </div>
           
    );
};

export default Home;