let currentRotation = 0;
let isSpinning = false;

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const spins = Math.floor(Math.random() * 4) + 5;
  const riggedOffset = Math.floor(Math.random() * 40) + 10;
  currentRotation +=
    spins * 360 + (360 - riggedOffset) - (currentRotation % 360);

  const wheel = document.getElementById("wheel");
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    document.getElementById("resultModal").style.display = "flex";
    document.getElementById("salamiVideo").src =
      "https://www.youtube.com/embed/KHpnUCiY7kk?autoplay=1&mute=0&controls=1&rel=0";
    isSpinning = false;
  }, 4200);
}

function closeModal() {
  document.getElementById("resultModal").style.display = "none";
  document.getElementById("salamiVideo").src = "";
}
