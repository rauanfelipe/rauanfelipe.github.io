$(function() {
  console.log("js bet here");
  $('#typed').typed({
    strings: [
    "Hi",
    "I'm Rauan Assis",
    "Welcome."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1400,
    loop: !0,
    startDelay: 1000,
  });
  $('a').click( function() {
    $(this).toggleClass("dont-turn-blue");
  });
}); 
