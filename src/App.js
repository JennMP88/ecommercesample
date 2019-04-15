import React from 'react'
import Product from './components/product'
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputName: '',
            inputImage: '',
            inputPrice: '',

            products: [
                {
                    name: 'LV Belt',
                    image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG9U2PTX54_PM2_Front%20view.jpg?wid=305&hei=305',
                    price: 1000
                },
                {
                    name: 'LV Belt',
                    image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG9U2PMOEC_PM2_Front%20view.jpg?wid=304&hei=304',
                    price: 1000
                },
                {
                    name: 'LV Belt',
                    image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG2Q2PPC02_PM2_Front%20view.jpg?wid=305&hei=305',
                    price: 1000
                },
                {
                    name: 'LV Belt',
                    image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--AFWQ2BSC02_PM2_Front%20view.jpg?wid=305&hei=305',
                    price: 1000
                }
            ]

        }
    }



    //Function------------------------------
    nameChange = (e) => {
        this.setState({ inputName: e.target.value })

    }
    imageChange = (e) => {
        this.setState({ inputImage: e.target.value })
    }

    priceChange = (e) => {
        this.setState  ({ inputPrice: parseInt(e.target.value) })
    }


    //-------------------------------------

    clickClicker = (e) => {
        e.preventDefault();
        const { inputName,inputImage, inputPrice} = this.state
        

  const updatedState = {...this.state};

  const newProduct = {};

  newProduct['name'] = inputName
  newProduct['price'] = inputPrice
  newProduct['image'] = inputImage
  
  updatedState.products.push(newProduct);

  this.setState(updatedState)
  
  // console.log('state in HIUI',this.state);
  // console.log('look at this', newProduct);
    
    
    }






    render() {
        console.log(this.state);
        // debugger
        const { products, inputName, inputImage, inputPrice} = this.state
        return (
            <>
                <h1>ZAPATOS</h1>
                <form onSubmit={this.clickClicker}>
                    {/* onSubmit handles enter on button clicker */}
                    <input type='text' value={this.state.inputImage} placeholder='image' onChange={this.imageChange} />
                    <input type='text' value={this.state.inputName} placeholder='name' onChange={this.nameChange} />
                    <input type='text' value={this.state.inputPrice} placeholder='price' onChange={this.priceChange} />
                    <button >Submit</button>
                </form>

                <div className='container row mx-auto'>
                    {/* m margin x is x axis left and right */}
                    {
                        products.map((e, i) => {

                            return <Product name={e.name} image={e.image} price={e.price} key={i} />
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