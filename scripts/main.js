// PORTFOLIO SLIDE

let sliding = false;

function scrollDown(active) {
  let activeIndex = $(".slide").index(active);
  let newIndex = $(".slide").index(active.prev());
  let newNode = document.querySelectorAll(`#slide-${newIndex + 1}`)

  anime({
    targets: ('.active'),
    top: ['0', '100%'],
    easing: 'easeOutCubic',
    duration: 1000
  })
  anime({
    targets: newNode,
    top: ['-100%', '0'],
    easing: 'easeOutCubic',
    duration: 1000
  })
  active.removeClass( 'active' )
  active.prev().addClass('active')
}

function scrollUp(active) {
  let activeIndex = $(".slide").index(active);
  let newIndex = $(".slide").index(active.next());
  let newNode = document.querySelectorAll(`#slide-${newIndex + 1}`)

  anime({
    targets: ('.active'),
    top: ['0', '-100%'],
    easing: 'easeOutCubic',
    duration: 1000
  })
  anime({
    targets: newNode,
    top: ['100%', '0'],
    easing: 'easeOutCubic',
    duration: 1000
  })

  active.removeClass( 'active' )
  active.next().addClass('active')
}


$(window).bind('mousewheel', function(event) {
  if (!sliding && event.originalEvent.wheelDelta >= 0) {
    if ($(".slide").index('.active') !== 0) {
      sliding = true;
      setTimeout(function() { sliding = false; }, 1020)

      scrollDown($('.active'))
    }
  }
  else if (!sliding && event.originalEvent.wheelDelta < 0) {
    if ($(".active").nextAll().length !== 0) {
      sliding = true;
      setTimeout(function() { sliding = false; }, 1020)

      scrollUp($('.active'))
    }
  }
});



// ABOUT TRANSITION
let lActive = false;

$('#contact').click(
  function() {
    if (!lActive) {
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
      // anime({
      //   targets: '#home',
      //   display: ['none', 'block']
      //   easing: 'easeOutCubic',
      //   duration: 300
      // })
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



