import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Container from './Components/Container';
import API from "./Utils/API";

class App extends Component {
  state = {
    numbers: Array,
    status: Number,
    answer: Number,
    userAnswer: "",
    correct: Boolean
  };
  // when component loads, generate the random numbers for addition by the user
  componentDidMount() {
    this.generateNumbers();
  };
  // handling the input change for the answer field and updating the state each change
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  // generates 2 random numbers between 1 and 20 and adds them to the numbers array and then sets the state.
  // Once numbers are generated, the doMath method is called
  generateNumbers() {
    let numbers = [];

    for (let i = 0; i < 2; i++) {
      numbers.push(Math.floor(Math.random() * 20) + 1)
    }

    this.setState({
      numbers: numbers 
    })

    // console.log(numbers)

    this.doMath(numbers[0], numbers[1])
  }
  // the Math.js API is called using the random numbers to get the correct answer for later comparison
  doMath = (numA, numB) => {
    API.calculate(numA, numB)
    .then(res => this.setState({
      status: res.status,
      answer: res.data
    }))
  };
  // Checks the user answer to the correct answer from the Math.js API. Depending on result, state is updated to reflect correct or incorrect
  // Clears the userAnswer state and generates new numbers for the next equation
  checkAnswer = (input) => {
    if(input === this.state.answer) {
      console.log("correct")
      this.setState({
        correct: true
      })
    }
    else {
      console.log("wrong")
      this.setState({
        correct: false
      })
    };

    this.setState({
      userAnswer: ""
    });
    
    this.generateNumbers()

  }

  render() {
    return(
      <Wrapper>
        <Container>
          <div className="row text-center">
            <div className="col-12">
              <h1>Addemup!</h1>
            </div>
          </div>

          <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.state.numbers[0]} + {this.state.numbers[1]} = ?</label>
                <input 
                  value={this.state.userAnswer} 
                  onChange={this.handleInputChange} 
                  name="userAnswer"
                  type="number" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  autoFocus></input>
            </div>
          </form>
          <button 
            onClick={() => this.checkAnswer(parseInt(this.state.userAnswer))}
            aria-pressed="false"
            className="btn btn-primary">Submit</button>
          <h3>{this.state.correct ? 'Correct!' : 'Incorrect'}</h3>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
