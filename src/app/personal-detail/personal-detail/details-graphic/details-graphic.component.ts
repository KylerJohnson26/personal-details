import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ElementRef, SimpleChanges, AfterContentInit } from '@angular/core';

import * as d3 from 'd3';
import { PersonalDetails } from '../personal-details.model';

@Component({
  selector: 'app-details-graphic',
  templateUrl: './details-graphic.component.html',
  styleUrls: ['./details-graphic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsGraphicComponent implements OnInit, OnChanges {

  @Input() data: PersonalDetails[];

  margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };
  svg;
  hostElement: ElementRef;
  xScale;
  yScale;
  xAxis;
  yAxis;

  width = 500 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;

  constructor() {}

  ngOnInit() {
    this.buildScatterChart();
  }

  ngOnChanges() {
    console.log(this.data);
  }

  prepareScatterData() {
    // sort data by age desc
    return [...this.data.sort((a, b) => b.age - a.age)];
  }

  buildScatterChart() {
    const scatterData = this.prepareScatterData();
    this.setScatterChartDimensions();
    this.setXScale(scatterData);
    this.setYScale(scatterData);
    this.drawScatterChart(scatterData);
    this.setXAxis();
    this.setYAxis();
    this.drawXAxis();
    this.drawYAxis();
  }

  updateScatterChart(scatterData: PersonalDetails[]) {
    if (!this.svg) {
      this.drawScatterChart(scatterData);
      return;
    }
    console.log(scatterData.length);
    this.svg = d3
      .select('.scatter-chart')
      .selectAll('.scatter')
      .data(scatterData);
  }

  setXScale(scatterData: PersonalDetails[]) {
    this.xScale = d3
      .scaleLinear()
      .domain(d3.extent(scatterData, d => d.friends.length))
      .range([0, this.width]);
  }

  setYScale(scatterData: PersonalDetails[]) {
    this.yScale = d3
      .scaleLinear()
      .domain(d3.extent(scatterData, d => d.age))
      .range([this.height, 0]);
  }

  setScatterChartDimensions() {
    this.svg = d3
      .select('.scatter-chart').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  drawScatterChart(scatterData): void {
    this.svg
      .append('g')
      .attr('class', 'scatter-points')
      .selectAll('.scatter')
      .data(scatterData)
      .enter()
      .append('circle')
      .attr('class', 'scatter')
      .attr('cx', d => this.xScale(d.friends.length))
      .attr('cy', d => this.yScale(d.age))
      .attr('r', 3)
      .style('fill', '#FF4081')
      .style('fill-opacity', 0.7);
  }

  setXAxis() {
    this.xAxis = d3
      .axisBottom(this.xScale)
      // .tickFormat(formatTicks)
      .tickSizeInner(-this.height)
      .tickSizeOuter(0);
  }

  drawXAxis() {
    this.svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(this.xAxis);
  }

  setYAxis() {
    this.yAxis = d3
      .axisLeft(this.yScale)
      // .tickFormat(formatTicks)
      .tickSizeInner(-this.height)
      .tickSizeOuter(0);
  }

  drawYAxis() {
    this.svg
      .append('g')
      .attr('class', 'y axis')
      .call(this.yAxis);
  }


}
