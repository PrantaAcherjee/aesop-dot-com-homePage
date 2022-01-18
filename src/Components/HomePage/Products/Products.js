import React from 'react';
import './Products.css';
import product from '../../../images/product.jpg';
import products from '../../../images/c-4.jpg';

const Products = () => {
    return (
         
            <div className="row mt-5 pt-4">
                                      
            <div className="col-md-4">
            <div style={{fontSize:'40px',color:'#333333',paddingLeft:'30px'}}>Aesop</div> 
            </div>
           
             <div className="col-md-4 image-style">            
              <img src={product} alt="" className='img-fluid' />
             </div>
             
             <div className="col-md-4 description-div">
                 <div className='my-2'><span style={{paddingRight:'20px'}}>Skin</span><span>Tone</span></div>
                 <div class='des-head'>
                 Parsley Seed Anti-Oxidant Facial Toner
                 </div>
                 <div className='paragraph'>An alcohol-free, anti-oxidant rich formulation that soothes and balances the skin while preparing it for hydration.</div>
                 <hr />
                 <div>
                 <div style={{color:'#333333'}}>Suited to</div>
                <small>Most skin types, including dry and mildly sensitive</small>
                 </div>
                 <hr />
                 <div>
                 <div style={{color:'#333333'}}>Skin feel</div>
                <small>Calm, soft and hydrated with a light finish</small>
                 </div>
                 <hr />
                 <div>
                <div style={{color:'#333333'}}> Key ingredients</div>
                 <small>Parsley Seed, Lavender Stem, Blue Chamomile</small>
                 </div>
                 <hr />
                 <div>
                     <div>Sizes</div>                   
                     
                    <span className='radio-items'> <input type="radio"/>100ml</span>
                     <span className='radio-items'><input  type="radio"/>200ml  
                     </span>
                 </div>
                 <br />
                 <button className='btn-style'>Add to your cart --$295.00</button>
                 <div>
                     <div className='row mt-4'>
                             <div className='col-md-8'>
                                 <div style={{color:'black'}}>Discover the kit</div>
                             Parsely Seed Extended Anti-oxidant skin care kit</div>
                         <div className='col-md-4'><img className='img-fluid ' src={products} alt="" /> </div>
                     </div>
                 </div>
             </div>
            
        </div>
        
    );
};

export default Products;
