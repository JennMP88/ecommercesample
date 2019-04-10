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
            <h1>hello world bla bla bla bla</h1>
      </>
    )
  }
}

export default App;