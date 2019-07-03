import React, { Component } from "react";
import * as d3 from "d3";


class FfcSvg2 extends Component {
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
 d3.select("svg").remove();

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
   .attr("cx", (d, i) => d[0])
   .attr("cy", (d, i) => h - d[1])
   .attr("r", 5);

 svg
   .selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(d => d[0] + ", " + d[1])
   .attr("x", (d, i) => d[0] + 5)
   .attr("y", (d, i) => h - d[1]);
  }

  render() {
    return <div className="firstBar" id="dupa" />;
  }
}

export default FfcSvg2;
