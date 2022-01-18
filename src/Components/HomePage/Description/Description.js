import React from 'react';
import canvas from '../../../images/canvas.jpg';
import './Description.css';

const Description = () => {
    return (
        <div>
            <div className='row bg-desc'>
            <div className='col-md-6'>
                <img src={canvas} alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6 des-two'>
                <h6>How to use</h6>
                <p className='des-style'>
                Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.
                </p>
                <hr />
                <p  >
                Dosage </p>
                
                <small>Half a teaspoon</small>
                <hr />
               
                <p  >
                Texture </p>
               
                <small> Aqueous</small>
                <hr />
                
                <p  >
                Aroma  </p>
               
                <small> Herbaceous, floral, fresh</small>
               <hr />
               
            
            </div>
            </div>
        </div>
    );
};

export default Description;