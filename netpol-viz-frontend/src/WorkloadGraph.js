import React, { useEffect } from 'react';
import * as d3 from 'd3';

const WorkloadGraph = ({ data }) => {
  useEffect(() => {
    const svg = d3.select('#graph')
      .append('svg')
      .attr('width', 800)
      .attr('height', 600);

    // Préparez les données pour les nœuds et les liens
    const nodeData = [...data.workloads, ...data.incomingFlows, ...data.outgoingFlows];
    const policyLinks = interpretPolicies(data.networkPolicies);
    const links = [...data.incomingFlows, ...data.outgoingFlows, ...policyLinks];

    // Utilisation de D3 pour créer le graphe de force
    const simulation = d3.forceSimulation(nodeData)
      .force('link', d3.forceLink(links).id(d => d.name))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(400, 300));

    const link = svg.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 2);

    const node = svg.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodeData)
      .join('circle')
      .attr('r', 5)
      .attr('fill', d => d.type === 'service' ? 'blue' : 'green')
      .call(drag(simulation));

    node.append('title')
      .text(d => d.name);
  
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });

    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

  }, [data]);

  return <div id="graph"></div>;
};

function interpretPolicies(networkPolicies) {
  // Logique pour intercepter les policies et transformer en liens
  const links = [];

  networkPolicies.forEach(policy => {
    if (policy.spec.ingress) {
      policy.spec.ingress.forEach(rule => {
        // Ajoutez la logique pour 'source' et 'target'
      });
    }
    if (policy.spec.egress) {
      policy.spec.egress.forEach(rule => {
        // Ajoutez la logique pour 'source' et 'target'
      });
    }
  });

  return links;
}

export default WorkloadGraph;