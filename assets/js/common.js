$( document ).ready(function () {






    particlesJS.load('animated-bg', '/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    //
    //
    //
    // $('body').on('mousemove', function(e){
    //     eyeTrack(e);
    // });
    // function eyeTrack(e) {
    //     e = e || window.event;
    //     var
    //         delta = (window.innerHeight / 2 - $('.eye-block .eye-wr .eye').offset().top) / 2,
    //         xPos = (e.clientX * 100) / window.innerWidth,
    //         yPos = ((e.clientY + delta) * 100) / window.innerHeight;
    //
    //     yPos > 90 ? yPos = 90 : yPos;
    //     xPos > 90 ? xPos = 90 : xPos;
    //
    //
    //     $('.eye-block .eye-wr .eye .eye-pupil').css({
    //         top: yPos + '%',
    //         left: xPos + '%'
    //     })
    // }
})
