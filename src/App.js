import React from "react";
import "./App.css";
import BarChart from "./BarChart";
import BarReds from "./BarReds";

class App extends React.Component {
  state = {
    activeChart: 0,
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    option: "BarChart"
  };

  clickHandler = () => {
    this.setState(
      this.state.activeChart === 0 ? { activeChart: 1 } : { activeChart: 0 }
    );
  };

  handleChange = event => {
    this.setState({ option: event.target.value });
  };

  chartRenderer = () => {
    switch (this.state.option) {
      case "BarChart":
        return (
          <BarChart
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
          />
        );
     //   break;
      case "BarReds":
        return <BarReds />;
      //  break;

      case "y":
        return <p>To be announced!</p>;
       // break;
      default:
        return <p>Choose the chart from the list above.</p>;
    }
  };

  render() {
    return (
      <div className="App">
        <label for="chart">Choose a chart: </label>
        <select
          id="chart"
          onChange={this.handleChange}
          value={this.state.option}
        >
          <option value="BarChart">BarChart</option>
          <option value="BarReds">BarReds</option>
          <option value="y">Yoshi</option>
        </select>

        <div id="dupa"> {this.chartRenderer()}</div>
      </div>
    );
  }
}

export default App;
