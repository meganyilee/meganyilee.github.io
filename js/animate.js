anime({
    targets: ".introduction .meimgs img",
    translateX: "50px",
    opacity: [0,1],
    delay: (_, index) => 300 + index * 200,
  });

  anime({
    targets: ".introduction .toplinks a",
    translateX: [0, 50],
    opacity: [0,1],
    delay: (_, index) => 500 + index * 100,
  });

// anime({
//   targets: ".images__container--left img",
//   translateX: "50px",
//   opacity: [0,1],
//   delay: (_, index) => 300 + index * 100,
// });