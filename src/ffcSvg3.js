import React, { Component } from "react";
import * as d3 from "d3";

class FfcSvg3 extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const dataset = [
      [34, 78],
      [109, 280],
      [310, 120],
      [79, 411],
      [420, 220],
      [233, 145],
      [333, 96],
      [222, 333],
      [78, 320],
      [21, 123]
    ];

    const w = 500;
    const h = 500;
    const padding = 60;
    d3.select("svg").remove();

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d[0])])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      .range([h - padding, padding]);

    const svg = d3
      .select("div#dupa")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "firstBar")
      .style("margin-left", 100);

    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d[0]))
      .attr("cy", d => yScale(d[1]))
      .attr("r", d => 5);

    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d[0] + "," + d[1])
      .attr("x", d => xScale(d[0] + 10))
      .attr("y", d => yScale(d[1]));

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);
  }

  render() {
    return <div className="firstBar" id="dupa" />;
  }
}

export default FfcSvg3;
