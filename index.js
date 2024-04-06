// Your code here
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left < 360) { // Assuming the game field is 400px wide
      dodger.style.left = `${left + 1}px`;
    }
  }
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

