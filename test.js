window.addEventListener('load', function () {
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');

  // Creating a pattern of horizontal lines
  const pattern = ctx.createLinearGradient(0, 0, 0, 10);
  pattern.addColorStop(0, 'black');
  pattern.addColorStop(1, 'white');

  // Translating the pattern
  ctx.translate(0, 50);

  // Using the pattern to fill a rectangle
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Removing the last occurrence of the pattern
  ctx.clearRect(0, 0, canvas.width, 50);
});
