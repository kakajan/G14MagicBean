function increase(step) {
  updateProgress(step);
}
function decrease(step) {
  updateProgress(step);
}
function updateProgress(step) {
  if (progress <= 100 && progress >= 0) {
    if (progress >= 50) {
      progressBar.style.backgroundColor = "green";
    } else {
      progressBar.style.backgroundColor = "rgb(14, 122, 237)";
    }
    progress = progress + step;
    console.log(progress);
  }
  if (progress < 0) {
    progress = 0;
  }
  if (progress > 100) {
    progress = 100;
  }
  console.log(progress);

  progressBar.style.width = progress + "%";
}
