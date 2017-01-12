import * as d3 from "d3";

export function toolTips() {

    //tooltips are opt-in so they need to be manually initialized, I suppose this could be in start up too

    $(document).ready(function () {


// Part #1 Uses a hidden tooltip with id svg-tooltip to place tooltip on mouse pointer on mouse move and leave events for selections
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body',
            placement: 'auto',
            title: 'No Value',
        });




        // Part #2 Uses a hidden tooltip with id svg-tooltip to place tooltip on mouse pointer on mouse move and leave events for selections
        $("circle, rect, path").on('mousemove', function (e) {
            $("#svg-tooltip").css({ top: e.pageY + $('body').scrollTop(), left: e.pageX }); //top is event y position plus the scroll postion of body
            $('#svg-tooltip').prop('title', $(this).attr('title')); //Sets the tilte attribute of the 
            $('#svg-tooltip').tooltip('show')
        })

        $("circle, rect, path").on('mouseleave', function (e) {
            $('#svg-tooltip').tooltip('destroy')
            $('#svg-tooltip').prop('title', 'Test');

        })

        console.log("Poop train");
        window.d3 = d3;


    });

}