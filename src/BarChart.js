import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const w = this.props.width;
    const h = this.props.height;
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

      svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d - 3);
  }

  render() {
    return <div className="firstBar" id="dupa" />;
  }
}

export default BarChart;
