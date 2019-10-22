import React, { Component, Fragment } from 'react';

class ReturnTypes extends Component{
  render(){
    return "hello";
  }
}
class App extends Component {
  render(){ 
    return (
      //Fragment를 사용하여 기존의 방식인 Array와 span으로 묶어서 할 필요가없다.
      <Fragment>
        <ReturnTypes />
      </Fragment>
    )
  }
}

export default App;
