import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div  style={{marginTop:'300px'}}>
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                            <li><Link to="/home">Home</Link></li>
                                <li><Link to="/">Aboute</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/">Aboute</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Travelo</h3>
                            <p>Excellent practical travel advice to help you travel better</p>
                        </div>
                        
                    </div>
                    <p class="copyright">Travelo © 2021</p>
                </div>
        </footer>
        </div>
    
         </div>
    );
};

export default Footer;