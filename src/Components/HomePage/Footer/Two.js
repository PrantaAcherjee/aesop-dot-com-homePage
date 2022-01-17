import React from 'react';
import './Two.css';

const Two = () => {
    return (
        
        <div className='footer-two'>
        <div className='row'>
          <div className="col-md-1"></div>
          <div className='col-md-4'>
          <div>Sustainability</div>
          <hr />
          <div>
              <p>
             <small>
             All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
             </small>
              </p>
          </div>
          </div>
          <div className='col-md-2'>
          <div>About</div>
          <hr />
          <div className='a-style my-2'><a href="">Our story</a></div>
          <div className='a-style my-2'><a href="">Foundation</a></div>
          <div className='a-style my-2'><a href="">Careers</a></div>
          <div className='a-style my-2'><a href="">Privacy policy</a></div>
          <div className='a-style my-2'><a href="">Accessibility</a></div>
          </div>
          <div className='col-md-2'>
          <div>Social media</div>
           <hr />
          <div className='a-style my-2'><a href="">Instagram </a></div>
          <div className='a-style my-2'><a href="">Twitter </a></div>
          <div className='a-style my-2'><a href="">LinkedIn </a></div>
          <div className='a-style my-2'><a href="">WeChat</a></div>
          <div className='a-style my-2'><a href="">Weibo </a></div>
          </div>
          <div className='col-md-3'></div>
          
               
        </div>
        <hr />
        <p className='footer'>© Aesop </p>
        </div>
         
    );
};

export default Two;