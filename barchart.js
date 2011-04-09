var data = [4, 8, 15, 16, 23, 42];

var chart = d3.select("body")
    .append("svg:svg")
    .attr("class", "chart")
    .attr("width", 420)
    .attr("height", 20 * data.length);

chart.selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
