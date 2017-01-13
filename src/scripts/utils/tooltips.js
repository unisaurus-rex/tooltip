import * as d3 from "d3";

export function toolTips() {

    $(document).ready(function () {


        // Part #1 Opt-in for bootstrap tool tip with a few options, this is for any element that is NOT a SVG drawing. The element will need to have the [data-toggle="tooltip"] attribute to work
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body',
            placement: 'auto',
            title: 'No Value',
        });

        // Part #2 Uses a hidden tooltip with id svg-tooltip to place tooltip on mouse pointer on mouse move and leave events for selections
        $("circle, rect, path").on('mousemove', function (e) { //Elements to select for the tooltip function,as we add new ones we need to update
            $("#svg-tooltip").css({ top: e.pageY + $('body').scrollTop(), left: e.pageX });     //top is event y position plus the scroll postion of body
            $('#svg-tooltip').prop('title', $(this).attr('title'));     //Sets the tilte attribute of the element the pointer is on 
            $('#svg-tooltip').tooltip('show')   //Shows the tooltip LAST to reduce flicker and jumping
        })

        $("circle, rect, path").on('mouseleave', function (e) {
            $('#svg-tooltip').tooltip('destroy')
        })

    });

}