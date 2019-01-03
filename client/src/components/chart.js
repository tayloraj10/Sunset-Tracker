import React, { Component } from 'react';
import * as d3 from 'd3';
import '../styles/chart.css';


class Chart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];

        // create whole svg element
        const svg = d3.select(".chart").append("svg").attr("width", 700).attr("height", 300).attr('class', 'chart-content');

        // create each bar
        svg.selectAll("rect").data(data).enter().append("rect").attr("x", (d, i) => i * 30).attr("y", (d, i) => 300 - 10 * d).attr("width", 26).attr("height", (d, i) => d * 10).attr("fill", "green");
    
        svg.selectAll('text').data(data).enter().append('text').text( (d) => d).attr('x', (d, i) => i * 30 ).attr('y', (d, i) => 300 - (10 * d) - 3)
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