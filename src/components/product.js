import React from 'react'

const Product=(props)=>{
    console.log(props)
    return (
    <div className='col-4 '>  {/* 1/3 of my screen */}
    <img src={props.image} alt=''/>
    <h4 className='text-center'>{props.name}</h4>
    <h5 className='text-center'>{props.price}</h5>
   </div>)
}

// NOTE: you are just taking the div info return

//you can also do this: 
 //    return(   <div className='col-4 ' key={i}>  {/* 1/3 of my screen */}
 //         <img src={this.state.products[i].image} alt=''/>
 //         <h4 className='text-center'>{this.state.products[i].name}</h4>
 //         <h5 className='text-center'>{this.state.products[i].price}</h5>
    
export default Product