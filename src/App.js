import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        products:[{
            name:'LV Belt',
            image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--louis-vuitton--BG9U2PTX54_PM2_Front%20view.jpg?wid=305&hei=305',
            price:1000
        }],
        
    }
  }

 
  render() {
    // console.log(this.state);
    return (
      <>   
      <h1>ZAPATOS</h1>
        <div className='container row'> 
            <div className='col-4 '>  {/* 1/3 of my screen */}
                <img src={this.state.products[0].image} alt=''/>
                <h4>{this.state.products[0].name}</h4>
                <h5>{this.state.products[0].price}</h5>
            </div>
        </div>
      </>
    )
  }
}

export default App;