anime({
    targets: "#introduction .meimgs img",
    translateX: "50px",
    opacity: [0,1],
    delay: (_, index) => 300 + index * 150,
  });

anime({
  targets: "#introduction .toplinks a",
  translateX: [0, 50],
  opacity: [0,1],
  delay: (_, index) => 500 + index * 100,
});

document .addEventListener('DOMContentLoaded', function(){
  //create waypoint
  let waypoint = new Waypoint({
    element: document.querySelector('#experience .resume'),
    handler: function() {
      anime.js({
        targets: '#experience .resume', 
        easing: 'easeOutExpo',
        translateX: [-100, 0],
        opacity: [0,1]
      })
    }
  })
  


})