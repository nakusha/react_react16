import React, { Component, Fragment } from 'react';
import {createPortal} from "react-dom";

// Portal의 에러를 발견할 수 없다.
class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}


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

const ErrorFallback = () => "Sorry something went wrong"
class App extends Component {
  state = {
    hasError:false
  };
  
  componentDidMount = (error, info) => {
    console.log(`catched ${error} and error infomation = ${JSON.stringify(info)}`);
    this.setState({
      hasError:true
    });
  };

  render(){ 
    const {hasError} = this.state
    return (
      //Fragment를 사용하여 기존의 방식인 Array와 span으로 묶어서 할 필요가없다.
      <Fragment>
        <ReturnTypes />
        <Portals/>
        {hasError ? <ErrorFallback/> : <ErrorMaker />}
      </Fragment>
    )
  }
}

export default App;
