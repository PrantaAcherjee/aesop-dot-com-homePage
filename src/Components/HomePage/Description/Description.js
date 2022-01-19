import React from 'react';
import canvas from '../../../images/canvas.jpg';
import './Description.css';

const Description = () => {
    return (
<div className='des-width'>
<div className='total-height'>
            <div className='row bg-desc'>
            <div className='col-md-6'>
                <img src={canvas} alt="" className='img-fluid images-style'/>
            </div>
            <div className='col-md-6 des-two'>
                <h6>How to use</h6>
                <p className='des-style'>
                Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.
                </p>
                <div className="h-r-1"></div>
                <p className='mt-2' >
                Dosage </p>
                
                <small style={{color:'gray'}}>Half a teaspoon</small>
                <hr />
               
                <p  >
                Texture </p>
               
                <small style={{color:'gray'}}> Aqueous</small>
                <hr />
                
                <p  >
                Aroma  </p>
               
                <small style={{color:'gray'}}> Herbaceous, floral, fresh</small>
               
               
            
            </div>
            </div>
        </div> 
</div>       
    );
};

export default Description;