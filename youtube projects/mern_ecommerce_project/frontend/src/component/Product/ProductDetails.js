import React, { Fragment,useEffect } from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css";
import {useSelector,useDispatch} from "react-redux"
import {getProductDetails} from "../../actions/productAction";

const ProductDetails=({match})=>{
    const dispatch=useDispatch();
    
    const {product,loading,error}=useSelector(state=>state.productDetails);

    useEffect(()=>{
      dispatch(getProductDetails(match.params.id));
    },[dispatch,match.params.id])
    
  return (
    <Fragment>
      <div className='ProductDetails'>
        <div>
           <Carousel>
            {product.images &&
              product.images.map((item,i)=>{
                 <img src={item.url} alt={`${i} Slide`} className='CarouselImage' key={item.url} />
            })}
           </Carousel>
        </div>  
      </div> 
    </Fragment>
  )
}

export default ProductDetails