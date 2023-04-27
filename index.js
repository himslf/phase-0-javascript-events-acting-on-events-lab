// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    };
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    };
}

const dodger = document.getElementById('dodger');   // grabbing element/'dodger'
dodger.style.backgroundColor = "#FF69B4";           // changing bg color
dodger.style.bottom = "7px";                        // changing position from bottom
dodger.style.left = "1px";                          // changing position from left


document.addEventListener("keydown", function (eVent) {
    if (eVent.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

