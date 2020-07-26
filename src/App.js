import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Container from './Components/Container';
import API from "./Utils/API";

class App extends Component {
  state = {
    result: []
  };

  componentDidMount() {
    // this.doMath(2,2);
    // console.log(this.state.result)
  }


  doMath = (numA, numB) => {
    API.calculate(numA, numB)
    .then(res => console.log(res.status))
  };

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
              <label htmlFor="exampleInputEmail1">2 + 2 = ?</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus></input>
            </div>
              
          </form>
          <button onClick={() => this.doMath(2,2)}className="btn btn-primary">Submit</button>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
