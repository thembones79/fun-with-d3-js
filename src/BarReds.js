import React, { Component } from "react";
import * as d3 from "d3";

class BarReds extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 15, 6, 16, 9, 1];

    const w = 700;
    const h = 300;
    d3.select("svg").remove();
    const svg = d3
      .select("div#dupa")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "redBar")
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
      .attr("fill", "red");
  }

  render() {
    return <div className="redBar" id="dupa" />;
  }
}

export default BarReds;
