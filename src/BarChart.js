import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];

    const w = 700;
    const h = 300;
    d3.select("svg").remove();

    const svg = d3
      .select("div#dupa")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "firstBar")
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
  }

  render() {
    return <div className="firstBar" id="dupa" />;
  }
}

export default BarChart;
