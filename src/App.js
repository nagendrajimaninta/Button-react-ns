import React from "react";
import "./styles.css";
class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pHidden : true
    };
  }
  render(){
    return (
      <div>
      {this.state.pHidden?null:
      <p id='para'>Hello hear is your text</p>}
      <button id='click' onClick={()=>{
        this.setState({pHidden:false})
      }}>Show Para</button>
      </div>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <Button />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
