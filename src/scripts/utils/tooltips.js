import * as d3 from "d3";

export function toolTips() {
 
 //tooltips are opt-in so they need to be manually initialized, I suppose this could be in start up too
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        //'placement': 'right'
    });
    
    $("svg, svg circle").tooltip({
        'container': 'body',
        'placement': 'right'
    });
});

    console.log("Poop train");
}
