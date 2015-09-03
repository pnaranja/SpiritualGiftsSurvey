function creategraph(ans){
    var graphscale = 40;

    var graphContainer = d3.select("form").append("p").append("svg")
                    .attr("width",1200)
                    .attr("height",600)
                    .style("border", "1px solid black");
  

    var leadership_rect = graphContainer.append("rect")
                    .attr("x", 150)
                    .attr("y", 10)
                    .attr("width", leadership(ans)*graphscale)
                    .attr("height", 50);

    d3.select("form").append("br");

    var administration_rect = leadership_rect.append("rect")
                    .attr("x", 150)
                    .attr("y", 10)
                    .attr("width", administration(ans)*graphscale)
                    .attr("height", 50);

    d3.select("form").append("br");
}


//D3 examples
d3.select("body").append("svg")
.attr("width",50).attr("height",50).append("circle")
.attr("cx",25).attr("cy",25).attr("r",25)
.style("fill","purple"); 

var theData = [1,2,3];
d3.select("body").selectAll("p")
.data(theData)
.enter()
.append("p")
.text(function(x,a) {return "Hello"+x+" "+a;});


var circleRadii = [40,20,10];
var svgContainer = d3.select("body").append("svg")
                .attr("width",200)
                .attr("height",200)
                .style("border", "1px solid black");

var circles = svgContainer.selectAll("circle")
                .data(circleRadii)
                .enter()
                .append("circle");

var circleAttributes = circles
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", function(d){return d;})
                .style("fill",function(d){
                  switch(d){
                    case 40: return "green"; break;
                    case 20: return "purple"; break;
                    case 10: return "red"; break;
                    default: return "black";
                  }
                });


d3.select("body").append("p");

var spaceCircles = [30,70,100];
var svcContainer2 = d3.select("body").append("svg")
                .attr("width",200)
                .attr("height",200)
                .style("border", "1px solid black");

var circles2 = svcContainer2.selectAll("circle")
                .data(spaceCircles)
                .enter()
                .append("circle");

var circleAttributes2 = circles2
                .attr("cx", function(d){return d;})
                .attr("cy", function(d){return d;})
                .attr("r", 20)
                .style("fill", function(d){
                switch(d){
                    case 30: return "green"; break;
                    case 70: return "purple"; break;
                    case 100: return "red"; break;
                    default: return "black";
                    }
                });


d3.select("body").append("p");

var jsonCircles = [
  { "x-axis": 30, "y-axis": 30, "radius": 20, "color": "green"},
  { "x-axis": 70, "y-axis": 70, "radius": 20, "color": "purple"},
  { "x-axis": 110, "y-axis": 100, "radius": 20, "color": "red"}];

var svcContainer3 = d3.select("body").append("svg")
                .attr("width",200)
                .attr("height",200)
                .style("border", "1px solid black");

var circles3 = svcContainer3.selectAll("circle")
                .data(jsonCircles)
                .enter()
                .append("circle");

var circleAttributes3 = circles3
                .attr("cx", function(d){return d["x-axis"];})
                .attr("cy", function(d){return d["y-axis"];})
                .attr("r", function(d){return d["radius"];})
                .style("fill", function(d){return d["color"];});



d3.select("body").append("p");

var svcContainer4 = d3.select("body").append("svg")
                .attr("width",400)
                .attr("height",400)
                .style("border", "1px solid black");

var rectangle = svcContainer4.append("rect")
                .attr("x", 10)
                .attr("y", 10)
                .attr("width", 100)
                .attr("height", 50);

var ellipse = svcContainer4.append("ellipse")
                .attr("cx", 150)
                .attr("cy", 150)
                .attr("rx", 25)
                .attr("ry", 10);

var line = svcContainer4.append("line")
                .attr("x1", 250)
                .attr("y1", 250)
                .attr("x2", 350)
                .attr("y2", 10)
                .attr("stroke-width", 5)
                .attr("stroke", "black");
