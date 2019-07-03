import React from "react";
import "./App.css";
import BarChart from "./BarChart";
import BarReds from "./BarReds";
import FfcSvg1 from "./ffcSvg1";
import FfcSvg2 from "./ffcSvg2";
import FfcSvg3 from "./ffcSvg3";
class App extends React.Component {
  state = {
    activeChart: 0,
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    option: "BarChart"
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

      case "FfcSvg1":
        return <FfcSvg1 />;
      // break;

      case "FfcSvg2":
        return <FfcSvg2 />;

      case "FfcSvg3":
        return <FfcSvg3 />;
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
          <option value="FfcSvg1">FfcSvg1</option>
          <option value="FfcSvg2">FfcSvg2</option>
          <option value="FfcSvg3">FfcSvg3</option>
        </select>

        <div id="dupa"> {this.chartRenderer()}</div>
      </div>
    );
  }
}

export default App;
