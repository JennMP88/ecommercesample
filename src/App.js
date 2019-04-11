import React from 'react'
import Product from './components/product'
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        products:[
        {
            name:'LV Belt',
            image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG9U2PTX54_PM2_Front%20view.jpg?wid=305&hei=305',
            price:1000
        },
        {
            name:'LV Belt',
            image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG9U2PMOEC_PM2_Front%20view.jpg?wid=304&hei=304',
            price:1000
        },
        {
            name:'LV Belt',
            image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG2Q2PPC02_PM2_Front%20view.jpg?wid=305&hei=305',
            price:1000
        },
        {
            name:'LV Belt',
            image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--AFWQ2BSC02_PM2_Front%20view.jpg?wid=305&hei=305',
            price:1000
        }
    ],
        
    }
  }

 
  render() {
    // console.log(this.state);
    // debugger
    const {products}=this.state
    return (
      <>   
      <h1>ZAPATOS</h1>
        <div className='container row mx-auto'> 
        {/* m margin x is x axis left and right */}
{  
        products.map((e,i)=>{
            
         return  <Product name={e.name} image={e.image} price={e.price}/>
        // <Route path='' Component={}/> similar to the thing above
            // route is a component with name,image,price being a prop
        })
}         
        </div>
      </>
    )
  }
}

export default App;