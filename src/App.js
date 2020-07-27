import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Container from './Components/Container';
import API from "./Utils/API";

class App extends Component {
  state = {
    numbers: Array,
    result: Number
  };

  componentDidMount() {
    this.generateNumbers();
  }

  generateNumbers() {
    let numbers = [];

    for (let i = 0; i < 2; i++) {
      numbers.push(Math.floor(Math.random() * 20) + 1)
    }
    this.setState({
      numbers: numbers 
    })
    console.log(numbers)
  }

  doMath = (numA, numB) => {
    API.calculate(numA, numB)
    .then(res => this.setState({
      result: res.status
    }))
  };

  checkAnswer = (userAnswer) => {

  }

  render() {
    return(
      <Wrapper>
        <Container>
          <div className="row text-center">
            <div className="col-12">
              <h1>App Title</h1>
            </div>
          </div>

          <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.state.numbers[0]} + {this.state.numbers[1]} = ?</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus></input>
            </div>
              
          </form>
          <button onClick={() => this.doMath(this.state.numbers[0],this.state.numbers[1])}className="btn btn-primary">Submit</button>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
