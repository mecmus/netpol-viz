import React, { useEffect } from 'react';
import * as d3 from 'd3';

const WorkloadGraph = ({ data }) => {
  useEffect(() => {
    const svg = d3.select('#graph')
      .append('svg')
      .attr('width', 800)
      .attr('height', 600);

    // Exemple simple de rendu d'un cercle
    svg.append('circle')
       .attr('cx', 100)
       .attr('cy', 100)
       .attr('r', 40)
       .style('fill', 'blue');

    // Code supplémentaire pour représenter les données avec D3.js
  }, [data]);

  return <div id="graph"></div>;
};

export default WorkloadGraph;