import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInputChange = (e) => {
    const input = parseInt(e.target.value);
    this.setState({ input });
  }

  handleSubmit = (e) => {
    const { list, input } = this.state;
    
    if (list.length === 0) {
      list.push(input);
    } else {
      const lastIndex = list.length - 1;
      const previousNumber = list[lastIndex];
      const sum = previousNumber + input;
      list.push(sum);
    }

    this.setState({ list });
  }

  render() {
    console.log(this.state);
    const { list } = this.state;
    return (
      <>
        <input type='text' onChange={this.handleInputChange} /> <button onClick={this.handleSubmit}>Submit</button>
        <ol>
          {
            list.map((e, i) => {
              return <li key={i}>{e}</li>;
            })
          }
        </ol>
      </>
    )
  }
}

export default App;
