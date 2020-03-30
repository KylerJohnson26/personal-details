import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ElementRef, SimpleChanges, AfterContentInit } from '@angular/core';

// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3Shape from 'd3-shape';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';
import * as d3 from 'd3';
import { PersonalDetails } from '../personal-details.model';

@Component({
  selector: 'app-details-graphic',
  templateUrl: './details-graphic.component.html',
  styleUrls: ['./details-graphic.component.scss'],
})
export class DetailsGraphicComponent implements OnInit {

  @Input() data: PersonalDetails[];

  title = 'Line Chart';

    private margin = {top: 10, right: 0, bottom: 50, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3.Line<[number, number]>;



  constructor() {
    this.width = 500 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.prepareScatterData();
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }

  private initSvg() {
    this.svg = d3.select('.scatter-chart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + 1000 + ' ' + 15000)
        .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
}

private initAxis() {
    this.x = d3.scaleLinear().range([0, this.width]);
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x.domain(d3.extent(this.data, (d) => d.age ));
    this.y.domain(d3.extent(this.data, (d) => d.friends.length ));
}

private drawAxis() {

    this.svg.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3.axisBottom(this.x));

    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(this.y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Number of Close Friends');
}

private drawLine() {
    this.line = d3.line()
        .x( (d: any) => this.x(d.age) )
        .y( (d: any) => this.y(d.friends.length) );

    this.svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.line);
}



  prepareScatterData() {
    // sort data by age desc
    return [...this.data.sort((a, b) => b.friends.length - a.friends.length)];
  }

  // buildScatterChart() {
  //   const scatterData = this.prepareScatterData();
  //   this.setScatterChartDimensions();
  //   this.setXScale(scatterData);
  //   this.setYScale(scatterData);
  //   this.drawScatterChart(scatterData);
  //   this.setXAxis();
  //   this.setYAxis();
  //   this.drawXAxis();
  //   this.drawYAxis();
  // }

  // setXScale(scatterData: PersonalDetails[]) {
  //   this.xScale = d3
  //     .scaleLinear()
  //     .domain(d3.extent(scatterData, d => d.friends.length))
  //     .range([0, this.width]);
  // }

  // setYScale(scatterData: PersonalDetails[]) {
  //   this.yScale = d3
  //     .scaleLinear()
  //     .domain(d3.extent(scatterData, d => d.age))
  //     .range([this.height, 0]);
  // }

  // setScatterChartDimensions() {
  //   this.svg = d3
  //     .select('.scatter-chart').append('svg')
  //     .attr('width', this.width + this.margin.right + this.margin.left)
  //     .attr('height', this.height + this.margin.top + this.margin.bottom)
  //     .append('g')
  //     .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  // }

  // drawScatterChart(scatterData): void {
  //   this.svg
  //     .append('g')
  //     .attr('class', 'scatter-points')
  //     .selectAll('.scatter')
  //     .data(scatterData)
  //     .enter()
  //     .append('circle')
  //     .attr('class', 'scatter')
  //     .attr('cx', d => this.xScale(d.friends.length))
  //     .attr('cy', d => this.yScale(d.age))
  //     .attr('r', 3)
  //     .style('fill', '#FF4081')
  //     .style('fill-opacity', 0.7);
  // }

  // setXAxis() {
  //   this.xAxis = d3
  //     .axisBottom(this.xScale)
  //     // .tickFormat(formatTicks)
  //     .tickSizeInner(-this.height)
  //     .tickSizeOuter(0);
  // }

  // drawXAxis() {
  //   this.svg
  //     .append('g')
  //     .attr('class', 'x axis')
  //     .attr('transform', `translate(0, ${this.height})`)
  //     .call(this.xAxis);
  // }

  // setYAxis() {
  //   this.yAxis = d3
  //     .axisLeft(this.yScale)
  //     // .tickFormat(formatTicks)
  //     .tickSizeInner(-this.height)
  //     .tickSizeOuter(0);
  // }

  // drawYAxis() {
  //   this.svg
  //     .append('g')
  //     .attr('class', 'y axis')
  //     .call(this.yAxis);
  // }


}
