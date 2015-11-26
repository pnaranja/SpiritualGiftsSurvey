//Helper generator to set the y-axis for each bar graph
nextyaxis = function*(){
    for(i = 0; true; i++)
        yield 10+60*i;
}

//Helper generator to set bar graph colors
nextcolor = function*(){
    var arr = ["purple","blue","red","orange"];
    for (color of arr){
        yield color;
        arr.push(color); //to create a "circular" array
    }
}

//Creates the bar graphs representing the different types of gifts
function creategiftgraphs(ans){
    var graphscale = 40;
    var genY = nextyaxis();
    var genY2 = nextyaxis();
    var nxtcolor = nextcolor();

    var gift_ans = gifts.map(function(gift){return gift(ans);});

    var graphContainer = d3.select("form").append("p").append("svg")
                    .attr("width",1200)
                    .attr("height",980)
                    .style("border", "1px solid black");
  
    //To Create the bar graphs
    graphContainer.selectAll("rect")
                    .data(gift_ans)
                    .enter()
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", function(){return genY.next().value;})
                    .attr("width", function(datum){return datum*graphscale})
                    .attr("height", 50)
                    .style("fill", function(){return nxtcolor.next().value;});

    //To create the answer strings next to the bar graphs
    graphContainer.selectAll("text")
                    .data(gift_ans)
                    .enter()
                    .append("svg:text")
                    .attr("x",function(datum){return datum*graphscale+5})
                    .attr("y", function(){return genY2.next().value;})
                    .attr("dy", 25)
                    .text(function(datum){return datum;})
                    .style("fill", "black");

}
