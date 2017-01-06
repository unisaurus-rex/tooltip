/***** jspm packages *****/
import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
import * as d3 from "d3";

/***** local packages *****/
import {toolTips} from 'tooltips';



//The global variables
var justTheTip = toolTips();



//Fakey-fake data 

var data = [
    { x: 20, y: 40, name: "Booty"},
    { x: 50, y: 70, name: "bootaay"},
    { x: 100, y: 120, name: "butt-cheeks!"}
];

//Let's make an quicky-quick svg example in this mofo
//set the svg stage for utter magic
var exsvg = d3.select("#example")
.append('svg')
.attr('width', "200px")
.attr('height', "200px")
.attr("title","I'm the SVG")
.style('background', "teal")
.style('margin', "10px");

//let's ball out with circles
exsvg.selectAll("circle").data(data, function(d) { return d.name;})
.enter().append("circle")
.attr("cx", function(d) { return d.x; })
.attr("cy", function(d) { return d.y;})
.attr("r", 10).attr("fill", "#fff")
.attr("title",function(d) {return d.name;}) //this is important to use data (from name key) to assign the title for the circles
.attr("class","my_circle");

justTheTip;