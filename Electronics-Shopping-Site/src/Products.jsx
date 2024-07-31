import React from 'react'
import "./Products.css"
import {FaRupeeSign} from 'react-icons/fa/';
import {MdAddBox} from 'react-icons/md/';
import Carousel from "./Carousel";
const Products = ({productItems,handleAddProduct}) => 
{
  
  return(
    <div>
      <Carousel/>
    <div className='products'>
    {productItems.map((productItem) => (
        <div key={productItem.id} className='card'>
            <img className='product-image' src={productItem.image} alt={productItem.name}/>
            <h4>{productItem.name}</h4>
            <p><FaRupeeSign/><b><i>{productItem.price}</i></b></p>
            <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add To Cart <MdAddBox size={25}/></button>
        </div>
    ))}
    </div>
    </div>
  );
};

export default Products;
