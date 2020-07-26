import React, { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Container from './Components/Container';

class App extends Component {
  state = {

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
            <div class="form-group">
              <label for="exampleInputEmail1">2 + 2 = ?</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus></input>
            </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
