let sliding = false;
var lActive = false;

// PORTFOLIO SLIDE
/*
  1) animate active slide with easeOutCubic and 1000 
  duration from top: 0 to top: 100%
  2) animate active slide with same values except
  top: -100% to 0
  3) remove active class from and slide and apply to next sibling
*/
function scroll(direction) {
  let nextIndex = $('.active').next();
  let prevIndex = $('.active').prev();

  if (direction == "up") {
    TweenMax.to(".active", 1, {top:"-100%"});
    TweenMax.to(nextIndex, 1, {top:0});

    $('.active').removeClass('active')
    nextIndex.addClass('active')
  } else if (direction == "down") {
    TweenMax.to(".active", 1, {top:"100%"});
    TweenMax.to(prevIndex, 1, {top:"0"});

    $('.active').removeClass('active')
    prevIndex.addClass('active')
  }
}


$(window).bind('mousewheel', function(event) {
  if (!lActive) {
    if (!sliding && event.originalEvent.wheelDelta >= 0) {
      if ($(".slide").index('.active') !== 0) {
        sliding = true;
        setTimeout(function() { sliding = false; }, 1000)
        scroll("down")
      }
    }
    else if (!sliding && event.originalEvent.wheelDelta < 0) {
      if ($(".active").nextAll().length !== 0) {
        sliding = true;
        setTimeout(function() { sliding = false; }, 1000)
        scroll("up")
      }
    }
  }
});


// ABOUT TRANSITION


$('#contact').click(
  function() {
    if (!lActive) {
      anime({
        targets: '#home',
        display: ["none", "block"],
        easing: 'easeOutCubic',
        duration: 300
      })
      anime({
        targets: '#left-content',
        right: ['50%', '0'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#right-content',
        left: ['50%', '100%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = true;
    } else {
      anime({
        targets: '#right-content',
        left: ['100%', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#left-content',
        right: ['0', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = false;
    }
  }
);


// DETAILS TRANSITION
$('#details').click(
  function() {
    console.log(lActive);
    if (!lActive) {
      anime({
        targets: '#right-content',
        left: ['50%', '0'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#left-content',
        right: ['50%', '100%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: ['.pic', '.pic2'],
        filter: ['grayscale(100%)', 'grayscale(0%)'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = true;
    } else {
      anime({
        targets: '#left-content',
        right: ['100%', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#right-content',
        left: ['0', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: ['.pic', '.pic2'],
        filter: ['grayscale(0%)', 'grayscale(100%)'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = false;
    }
  }
);



