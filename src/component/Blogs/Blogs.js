import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import blog1 from '../../assests/images/blog1.jpg'
import blog2 from '../../assests/images/blog2.jpg'
import blog3 from '../../assests/images/blog3.jpg'

const Reason = () => {
    return (
        <div className="container my-5" style={{marginTop:'50px', marginBottom:'50px'}}>
        <div >
            <h3 className='my-5' style={{fontWeight:'bold',fontFamily:'serif'}}>Top <span style={{color:'goldenrod'}}>Blogs</span></h3>
        </div>
        <Row xs={1} md={3} className="g-2">
        <Col >
            <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={blog1} />
            <Card.Body>
              {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
              <Card.Text>
              I’m not going to lie: I think I have a pretty good travel blog. (You probably do too if you’re here.) I work hard to provide excellent practical travel advice to help you travel better, but I’m not the only great travel blogger out there. In fact — and I know this might be shocking — there’s a lot about travel that I’m not an expert on. Family travel? No idea. Travel as a woman? Clueless. Information on hotels? Only a little. Photography?
                  
              

              </Card.Text>
              <Card.Text>

              </Card.Text>

            </Card.Body>
              </Card>
            </Col>
        <Col >
            <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={blog2} />
            <Card.Body>
              {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
              <Card.Text>
              I’m not going to lie: I think I have a pretty good travel blog. (You probably do too if you’re here.) I work hard to provide excellent practical travel advice to help you travel better, but I’m not the only great travel blogger out there. In fact — and I know this might be shocking — there’s a lot about travel that I’m not an expert on. Family travel? No idea. Travel as a woman? Clueless. Information on hotels? Only a little. Photography?

              </Card.Text>
              <Card.Text>

              </Card.Text>

            </Card.Body>
              </Card>
            </Col>
        <Col >
            <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={blog3} />
            <Card.Body>
              {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
              <Card.Text>
              I’m not going to lie: I think I have a pretty good travel blog. (You probably do too if you’re here.) I work hard to provide excellent practical travel advice to help you travel better, but I’m not the only great travel blogger out there. In fact — and I know this might be shocking — there’s a lot about travel that I’m not an expert on. Family travel? No idea. Travel as a woman? Clueless. Information on hotels? Only a little. Photography?

              </Card.Text>
              <Card.Text>

              </Card.Text>

            </Card.Body>
              </Card>
            </Col>
           
        </Row>
        
    </div>
    );
};

export default Reason;