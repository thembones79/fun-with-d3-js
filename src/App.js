import React from "react";
import "./App.css";
import BarChart from "./BarChart";
import BarReds from "./BarReds";


class App extends React.Component {
  state = { activeChart: 0 };

  clickHandler = () =>{
this.setState(
  this.state.activeChart === 0 ? { activeChart: 1 } : { activeChart: 0 }
);
  }

chartRenderer = () =>{
  if (this.state.activeChart) {
    return <BarChart />;
  } else {
    return <BarReds />;
  }
}

  render() {


    return (
      <div className="App">
        <button onClick={this.clickHandler}>
          Chart number: {this.state.activeChart}
        </button>
        <div id="dupa"> {this.chartRenderer()}</div>
      
      </div>
    );
  }
}


export default App;
