import React, { Component } from 'react';
import * as d3 from 'd3';


class Chart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];
        const svg = d3.select(".chart").append("svg").attr("width", 700).attr("height", 300);

        svg.selectAll("rect").data(data).enter().append("rect").attr("x", (d, i) => i * 30).attr("y", (d, i) => 300 - 10 * d).attr("width", 25).attr("height", (d, i) => d * 10).attr("fill", "green");
    }

    render() {
        
      return (
        <div className='chart'>
            <p>Chart</p>
            
        </div>
      );
    }
  }
  
  export default Chart;