import * as d3 from "d3";

export function toolTips() {

    //tooltips are opt-in so they need to be manually initialized, I suppose this could be in start up too

    $(document).ready(function () {

        $("body").tooltip({ selector: '[title]' });

        $("[title]").tooltip({
            container: 'body',
            placement: 'top',
            title: 'No Value',
            trigger: 'click'
        });
        //alter the tooltip position when shown
        $('[title]').click(function () {
            //var offset = this.offset();
            $('.tooltip').css('top', parseInt($('.tooltip').css('top')) + $('body').scrollTop() + 'px')
        });

        console.log("Poop train");
        window.d3 = d3;
    });


}