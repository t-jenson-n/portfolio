const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
});


