import React from 'react';
import './One.css';

const One = () => {
    return (
        <div className='row footer-one'>
           <div className="col-md-6">
             <input type="email"
             className='email-input'
             placeholder='Email address' />
             <br />
             <input type="checkbox"/>
             <span>
                 <small>
                 Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy
                 </small>
            </span>  
            </div> 
            <div className="col-md-2">
            <div>Orders and support</div>
            <hr />
             
            <div className='a-style my-2'><a href="">Shipping</a></div>
            <div className='a-style'> <a href="">FAQs</a></div>
            <div className='a-style my-2'> <a href="">Returns</a></div>
            <div className='a-style my-2'> <a href="">Orders History</a></div>
            <div className='a-style my-2'> <a href="">Terms & Condition</a></div>        
            
            </div>
            <div className="col-md-2">
                <div>Services</div> 
                <hr />
                <div className='a-style my-2'><a href="">Live assistance</a> </div>
                <div className='a-style my-2'><a href="">Corporate gifts</a> </div>
                <div className='a-style'><a href="">Facial appointments </a></div>
            </div>
            <div className="col-md-2">
                <div>Location and preferences</div>
                <hr />
                    <div className='a-style my-2'><a href="">Shipping:
                    Hong Kong (S.A.R)</a></div>
                    <div className='a-style my-2'>
                    <a href="">Language:
                    English</a>
                    </div>
            </div>
        </div>
    );
};

export default One;