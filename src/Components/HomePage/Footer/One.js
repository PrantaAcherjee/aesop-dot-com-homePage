import React from 'react';
import './One.css';

const One = () => {
    return (
        <div className='footer-one'>
            <div className='row'>
           <div className="col-md-1"></div>
           <div className="col-md-4">
             <input type="email"
             className='email-input'
             placeholder='Email address'
              
             />
             <br />
             <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <span style={{paddingLeft:'5px'}}>
                <small>
                 Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy
                </small>
                </span>  
                </div>            
            </div> 
            <div className="col-md-2">
            <div>Orders and support</div>
             <div className='h-r-2'></div>         
            <div className='a-style my-3'><a href="">Contact Us</a></div>
            <div className='a-style my-3'> <a href="">FAQs</a></div>
            <div className='a-style my-3'><a href="">Shipping</a></div>
            <div className='a-style my-3'> <a href="">Returns</a></div>
            <div className='a-style my-3'> <a href="">Orders History</a></div>
            <div className='a-style my-3'> <a href="">Terms & Condition</a></div>        
            
            </div>
            <div className="col-md-2">
                <div>Services</div> 
                <div className='h-r-2'></div> 
                <div className='a-style my-3'><a href="">Live assistance</a> </div>
                <div className='a-style my-3'><a href="">Corporate gifts</a> </div>
                <div className='a-style'><a href="">Facial appointments </a></div>
            </div>
            <div className="col-md-2">
                <div>Location preferences</div>
                <div className='h-r-2'></div> 
                    <div className='a-style my-3'><a href="">Shipping:
                    Hong Kong (S.A.R)</a></div>
                    <div className='a-style my-3'>
                    <a href="">Language:
                    English</a>
                    </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        </div>
    );
};

export default One;