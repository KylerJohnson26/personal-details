import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from '@angular/core';

import * as d3 from 'd3';
import { PersonalDetails } from '../personal-details.model';

@Component({
  selector: 'app-details-graphic',
  templateUrl: './details-graphic.component.html',
  styleUrls: ['./details-graphic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsGraphicComponent implements OnInit, OnChanges {
  @ViewChild('chart', { static: true }) chartContainer: ElementRef;
  @Input() data: PersonalDetails[];

  private margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };
  private chart: any;
  private svg;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;

  private width = 500 - this.margin.left - this.margin.right;
  private height = 500 - this.margin.top - this.margin.bottom;

  constructor() {}

  ngOnInit() {
    this.buildScatterChart();
  }

  ngOnChanges() {
    console.log(this.chartContainer.nativeElement);
    // todo: update chart on changes
    this.updateScatterChart(this.data);
  }

  private prepareScatterData() {
    // sort data by age desc
    return [...this.data.sort((a, b) => b.age - a.age)];
  }

  private buildScatterChart() {
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

  private updateScatterChart(scatterData: PersonalDetails[]) {
    const scatterGroup = d3
      .select('.scatter-chart')
      .select('.chart')
      .select('.scatter-group');

    this.setXScale(scatterData);
    this.setYScale(scatterData);
    this.setXAxis();
    this.setYAxis();
    scatterGroup.selectAll('.y.axis').call(this.yAxis);
    scatterGroup.selectAll('.x.axis').call(this.xAxis);

    const update = scatterGroup
      .select('.scatter-points')
      .selectAll('.scatter')
      .data(scatterData);

    update.exit().remove();

    update.transition()
      .attr('cx', d => this.xScale(d.age))
      .attr('cy', d => this.yScale(d.friends.length));

    update
      .enter()
      .append('circle')
      .attr('class', 'scatter')
      .attr('cx', d => this.xScale(d.age))
      .attr('cy', d => this.yScale(d.friends.length))
      .attr('r', 5)
      .style('fill', '#FF4081')
      .style('fill-opacity', 0.7);

  }

  private setXScale(scatterData: PersonalDetails[]) {
    this.xScale = d3
      .scaleLinear()
      .domain(d3.extent(scatterData, d => d.age))
      .range([0, this.width]);
  }

  private setYScale(scatterData: PersonalDetails[]) {
    this.yScale = d3
      .scaleLinear()
      .domain(d3.extent(scatterData, d => d.friends.length))
      .range([this.height, 0]);
  }

  private setScatterChartDimensions() {
    this.svg = d3
      .select('.scatter-chart')
      .append('svg')
      .attr('class', 'chart')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('class', 'scatter-group')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  private drawScatterChart(scatterData): void {
    this.svg
      .append('g')
      .attr('class', 'scatter-points')
      .selectAll('.scatter')
      .data(scatterData)
      .enter()
      .append('circle')
      .attr('class', 'scatter')
      .attr('cx', d => this.xScale(d.age))
      .attr('cy', d => this.yScale(d.friends.length))
      .attr('r', 5)
      .style('fill', '#FF4081')
      .style('fill-opacity', 0.7);
  }

  private setXAxis() {
    this.xAxis = d3
      .axisBottom(this.xScale)
      .tickSizeInner(-this.height)
      .tickSizeOuter(0);
  }

  private drawXAxis() {
    this.svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .style('stroke', '#3F51B5')
      .style('stroke-dasharray', '4, 2')
      .call(this.xAxis)
      .call(this.addLabel, 'Age', 20);
  }

  private setYAxis() {
    this.yAxis = d3
      .axisLeft(this.yScale)
      .tickSizeInner(-this.height)
      .tickSizeOuter(0);
  }

  private drawYAxis() {
    this.svg
      .append('g')
      .attr('class', 'y axis')
      .style('stroke', '#3F51B5')
      .style('stroke-dasharray', '4, 2')
      .call(this.yAxis)
      .call(this.addLabel, 'No. of Close Friends', 5);
  }

  private addLabel(axis: any, label: string, x: number) {
    axis
      .selectAll('.tick:last-of-type text')
      .clone()
      .text(label)
      .attr('x', x)
      .style('text-anchor', 'start')
      .style('font-weight', 'bold')
      .style('fill', '#555');
  }

  private removeChart() {
    d3.select('svg').remove();
  }
}
