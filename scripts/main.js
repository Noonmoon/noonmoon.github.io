// INTERACTIONS
$('.activeTitle').addClass('slide-in-elliptic-bottom-fwd')



// PORTFOLIO SLIDE

/*
  1) animate active slide with easeOutCubic and 1000 
  duration from top: 0 to top: 100%
  2) animate active slide with same values except
  top: -100% to 0
  3) remove active class from and slide and apply to next sibling
*/

let sliding = false;

function scroll(direction) {
  let nextIndex = $('.active').next();
  let prevIndex = $('.active').prev();
  
  setTimeout(function() { sliding = false; }, 1350)
  if (direction == "up") {
    $('.activeTitle').removeClass().addClass('activeTitle slideInfo slide-out-elliptic-top-bck')
    setTimeout(function() { $('.activeTitle').prev().removeClass('activeTitle') }, 750)
    $('.activeTitle').next().removeClass().addClass('slideInfo activeTitle slide-in-elliptic-bottom-fwd')

    TweenMax.to(".active", 1, {top:"-100%"});
    TweenMax.to(nextIndex, 1, {top:0});

    $('.active').removeClass('active')
    nextIndex.addClass('active')
  } else if (direction == "down") {
    $('.activeTitle').removeClass().addClass('slideInfo activeTitle slide-out-elliptic-bottom-bck')
    setTimeout(function() { $('.activeTitle').next().removeClass('activeTitle') }, 750)
    $('.activeTitle').prev().removeClass().addClass('slideInfo activeTitle slide-in-elliptic-top-fwd')

    TweenMax.to(".active", 1, {top:"100%"});
    TweenMax.to(prevIndex, 1, {top:"0"});

    $('.active').removeClass('active')
    prevIndex.addClass('active')
  }
}

let homePage = true;

$(window).on('mousewheel', function(event) {
  console.log("scrolling")
 
  if (homePage && !sliding) {
    if (event.originalEvent.wheelDelta >= 0 && $(".slide").index('.active') !== 0) {
      sliding = true;
      scroll("down")
    }
    else if (event.originalEvent.wheelDelta < 0 && $(".active").nextAll().length !== 0) {
      sliding = true;
      scroll("up")
    }
  }
});


// PAGE TRANSITIONS

/*
  1) first click #left-content right: 0 #right-content left: 100%
  2) if second revert

  1) firstclick #right-content left: 0 #left-content right: 100%
  2) .pic fliter: grayscale: (0%)
  3) if second revert
*/

// ABOUT
let contactCounter = 0;
$('.left-link').click(
  function() {
    contactCounter++;

    if (contactCounter % 2 === 1) {
      $('#contact').removeClass().addClass('left-link scale-out-ver-bottom')
      $('#home').removeClass().addClass('left-link scale-in-ver-top')

      TweenMax.to('#left-content', 0.75, {right: 0})
      TweenMax.to('#right-content', 0.75, {left: "100%"})
      homePage = false;
    } else {
      $('#home').removeClass().addClass('left-link scale-out-ver-top')
      $('#contact').removeClass().addClass('left-link scale-in-ver-bottom')

      TweenMax.to("#left-content", 0.75, {right: "50%"})
      TweenMax.to("#right-content", 0.75, {left: "50%"})
      homePage = true;
    }

  }
);


// PORTOFLIO
let portfolioCounter = 0;
$('#details').click(
  function() {
    portfolioCounter++;

    if (portfolioCounter % 2 === 1) {
      TweenMax.to("#right-content", 0.75, {left: 0})
      TweenMax.to("#left-content", 0.75, {right: "+100%"})
      TweenMax.to(".pic", 0.75, {filter: "grayscale(0%)"})
      TweenMax.to(".overlay", 0.75, {opacity: 0})
      homePage = false;
    } else {
      TweenMax.to("#right-content", 0.75, {left: "50%"})
      TweenMax.to("#left-content", 0.75, {right: "50%"})
      TweenMax.to(".pic", 0.75, {filter: "grayscale(100%)"})
      homePage = true;
    }
  
  }
);



