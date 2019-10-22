import React, { Component, Fragment } from 'react';
import {createPortal} from "react-dom";

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const{pizzas} = state;
  // null 을 리턴하면 state가 업데이트 되느넋을 막을 수 있다.
  if(pizzas < MAX_PIZZAS){
    return {
      pizzas:pizzas + 1
    }
  }else{
    return null
  }
};

class Controlled extends Component{
  state = {
    pizzas:1
  };
  render (){
    const { pizzas } = this.state
    return <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}</button>
  }
  _handleClick = () => {
    this.setState(eatPizza)
  }
}
/*
//HOC 모든 컴포넌트를 보호해줌(각각 애러처리 할 필요가없음)
const BoundaryHOC = ProtectedComponent => class Boundary extends Component {
  state = {
    hasError:false
  }
  componentDidCatch = () => {
    this.setState({
      hasError: true
    })
  }
  render(){
    const {hasError} = this.state;
    if (hasError){
      return <ErrorFallback/>
    }else{
      return <ProtectedComponent/>
    }
  }
}
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

const PErrorMaker = BoundaryHOC(ErrorMaker)

//Portal을 이용하여 React의 scope(root)밖에서도 수정을 할 수 있다.
class Portals extends Component{
  render(){
    return createPortal(
      // mount될 장소를 써준다.
      <Message/>, document.getElementById("touchme")
    );
  }
}

const PPortals = BoundaryHOC(Portals)

const Message = () => "Just touched it!";

class ReturnTypes extends Component{
  render(){
    return "hello";
  }
}

const ErrorFallback = () => "Sorry something went wrong"
*/
class App extends Component {
  render(){ 
    
    return (
      <Controlled />
      /*Fragment를 사용하여 기존의 방식인 Array와 span으로 묶어서 할 필요가없다.
      <Fragment>
        <ReturnTypes />
        <PPortals/>
        <PErrorMaker/>
      </Fragment>
      */
    )
  }
}

export default App;
//export default BoundaryHOC(App);
