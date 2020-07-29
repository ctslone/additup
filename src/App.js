import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Container from './Components/Container';
import Title from './Components/Title'
import AnswerStatus from './Components/AnswerStatus'
import API from "./Utils/API";

class App extends Component {
  state = {
    numbers: Array,
    status: Number,
    answer: Number,
    userAnswer: "",
    correct: Boolean,
    show: false
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
      numbers.push(Math.floor(Math.random() * 10) + 1)
    }

    this.setState({
      numbers: numbers
    })

    this.doMath(numbers[0], numbers[1]);

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
    if(this.state.status !== 200) {
      alert("There has been an error. Please try again later.")
    }
    
    this.setState({
      show: true
    })

    if (input === this.state.answer) {
      // console.log("correct")
      this.setState({
        correct: true
      })
      this.generateNumbers()
    }
    else {
      // console.log("wrong")
      this.setState({
        correct: false
      })
    };

    this.setState({
      userAnswer: ""
    });

  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Title />

          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <label id="equation" htmlFor="exampleInputEmail1">What is {this.state.numbers[0]} + {this.state.numbers[1]} = ?</label>
                <h5>Enter your answer below</h5>
                <input
                  value={this.state.userAnswer}
                  onChange={this.handleInputChange}
                  name="userAnswer"
                  type="number"
                  className="form-control text-center"
                  id="answerInput"
                  autoFocus>
                </input>

                <div>
                  {this.state.show && <AnswerStatus>{this.state.correct ? 'You got it right! Great Work!' : 'Oops! Try Again!'}</AnswerStatus>}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <button onClick={() => this.checkAnswer(parseInt(this.state.userAnswer))} id="submit-ans-btn" className="btn btn-lg">Submit</button>
            </div>
          </div>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
