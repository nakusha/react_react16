import React, { Component, Fragment } from 'react';
import {createPortal} from "react-dom";

//Portal을 이용하여 React의 scope(root)밖에서도 수정을 할 수 있다.
class Portals extends Component{
  render(){
    return createPortal(
      // mount될 장소를 써준다.
      <Message/>, document.getElementById("touchme")
    );
  }
}

const Message = () => "Just touched it!";

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
        <Portals/>
      </Fragment>
    )
  }
}

export default App;
