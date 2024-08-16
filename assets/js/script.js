$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });
  
  
  const video = document.getElementById("video");
  const circlePlayButton = document.getElementById("circle-play-b");
  
  function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
  }

  $(".dropdown").hover(function() {
    $(this).toggleClass("active");
    $(".dropdown-menu").toggleClass('active');
  });

  $(".dropdown").click(function() {
    $(this).toggleClass("active");
    $(".dropdown-menu").toggleClass('active');
  });

  $("#toggle").click(function() {
  $(this).toggleClass("on");
  $(".menu").slideToggle();
  $(".all-secreen-ele").toggleClass("hide");
  });
  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
  });
  
  video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
  });
  
  