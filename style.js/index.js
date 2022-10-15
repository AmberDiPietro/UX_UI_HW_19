console.log ("hello");



$(".button-secondary").hover(function() {
    doBounce($(this), 3, '10px', 300);   
});


function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}

$(".button-primary").hover(function() {
    doBounce($(this), 3, '10px', 300);   
});


function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}