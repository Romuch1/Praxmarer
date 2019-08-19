function initMap() {
    navigator.geolocation.getCurrentPosition(function(pos){
        var elem=document.getElementById('map');
        var myCenter={
            lat:pos.coords.latitude, 
            lng:pos.coords.longitude
        };
        var mapOptions={
            center: myCenter,
            zoom: 7,
            backgroundColor:"silver",
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            scrollwheel:true
        }
        var map = new google.maps.Map( elem,mapOptions );

        var markerOptions={
            position:myCenter,
            map:map,
            title:"hello",
            animation:google.maps.Animation.DROP,
            draggable:true
        }
        var marker=new google.maps.Marker(markerOptions);
        marker.addListener("click",toggleBounce);
        function toggleBounce(){
            if(marker.getAnimation() !== null){
                marker.setAnimation(null);
            } else{
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
    }
)}

$(document).ready(function() {
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }   
    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);


    var offset = 80;
    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });

$('.fir').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:false
        },
        500:{
            items:2,
            nav:false,
            loop:false
        },
        780:{
            items:2,
            nav:false,
            loop:false
        },
        1000:{
            items:3,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        },
        1400:{
            items:3,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        }
    }
});
$('.sec').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:false
        },
        500:{
            items:2,
            nav:false,
            loop:false
        },
        780:{
            items:2,
            nav:false,
            loop:false
        },
        1000:{
            items:3,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        },
        1400:{
            items:3,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        }
    }
});
  $('.thir').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:false
        },
        500:{
            items:2,
            nav:false,
            loop:false
        },
        780:{
            items:3,
            nav:false,
            loop:false
        },
        1000:{
            items:4,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        },
        1400:{
            items:4,
            nav:true,
            navText: [
                "<i class='icon-chevron-left icon-white'><</i>",
                "<i class='icon-chevron-right icon-white'>></i>"
            ],
            loop:false
        }
    }
});  
    

		
    
    
    $(".logo").click(function(){
        $(".content-d1").toggle();
    })
    
    
    
}); // end docum





