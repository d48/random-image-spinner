const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
  "images/10.png",
];

let currentIndex = 0;
const slotMachine = document.getElementById("slotMachine");

function loadImages() {
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("image");
    img.style.top = `${index * 100}%`;
    slotMachine.appendChild(img);
  });
}

function startAnimation() {
  stopIndex = Math.floor(Math.random() * images.length);

  const interval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    updateImagePositions();

    if (currentIndex === stopIndex) {
      clearInterval(interval);
    }
  }, 100);
}

function updateImagePositions() {
  const images = slotMachine.querySelectorAll(".image");
  images.forEach((img, index) => {
    let calculatedIndex = index - currentIndex;
    if (calculatedIndex < 0) {
      calculatedIndex += images.length;
    }
    img.style.top = `${calculatedIndex * 100}%`;
  });
}

loadImages();
