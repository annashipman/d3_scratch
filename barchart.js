var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
     .domain([0, d3.max(data)])
     .range([0, 420]);

var chart = d3.select("body")
    .append("svg:svg")
    .attr("class", "joe")
    .attr("width", 420)
    .attr("height", 20 * data.length);

chart.selectAll("rect")
    .data(data)
    .enter()
    .append("svg:rect")
    .attr("y", function(d, i) { return i * 20; })
    .attr("width", x)
    .attr("height", 20);
