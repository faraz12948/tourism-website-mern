import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import g1 from "../../assests/images/g1.png"
import g2 from "../../assests/images/g2.png"
import g3 from "../../assests/images/g3.png"


const Guides = () => {
    return (
        <div className="container " style={{marginTop:'80px' , marginBottom:'80px'}}>
        <div className='container' >
            <h3>Our<span style={{color:'goldenrod'}} >Guides</span></h3>


            <div className='row row-col-md-6 row-col-sm-12' style={{ }}  >
              
              <div className='col' border="light" style={{ width: '20%', height:'40%', marginTop:'50px' }}>
                          <img src={g1} alt="" style={{ width: '60%', height:'60%' }} />
                        
                         <div className='mt-5'>
                           <h5>Julio R.</h5>
                           <p>
                           </p>
                         </div>
                     </div>
              <div className='col' border="light" style={{ width: '20%', height:'40%', marginTop:'50px' }}>
                          <img src={g2} alt="" style={{ width: '60%', height:'60%' }} />
                        
                         <div className='mt-5'>
                           <h5>Kara L.</h5>
                           <p></p>
                         </div>
                     </div>
              <div className='col' border="light" style={{ width: '20%', height:'40%', marginTop:'50px' }}>
                          <img src={g3} alt="" style={{ width: '60%', height:'60%' }} />
                        
                         <div className='mt-5'>
                           <h5>Mireka A.</h5>
                           <p>
                           </p>
                         </div>
                     </div>
             
             
         </div>
        </div>
        
        
    </div>
    );
};

export default Guides;