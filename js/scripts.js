$(document).ready(function(){
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "scale",
                duration: 300
            },
            hide: {
                effect: "fade",
                duration: 300
            }


        });

        $( "#dialog" ).dialog({
            width : 500
        });

        $( "#dialog" ).dialog({
            height: 200
        });

        $( "#dialog" ).dialog({
            resizable: false
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });

    } );




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});