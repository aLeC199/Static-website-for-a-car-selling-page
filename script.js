const carHeaders = ["Mercedes benz", "Lamborghini", "Cat demon", "Draco-v46"];
const carsDetails = [
  "Luxury, innovation, exceptional Performance, Premium design....",
  "Sleek and premium build with comfort in mind......",
  "Iconic design and exceptional performance...",
  "Rugged and reliable. Built for adventure and off-road capability....",
];
const carArrays = [
  "images/x3orr.jpg",
  "images/lambo-show.jpg",
  "images/demon-cat.jpg",
  "images/draco.jpg",
];
const headerArray = [
  "images/lamborghini.png",
  "images/aventador.png",
  "images/yellow-lambo.png",
  "images/twin-lambo.png",
];
const backgrounds = [
  "radial-gradient(50% 50% at 50% 50%, #e41919ff, #ff0000ff)",
  "radial-gradient(50% 50% at 50% 50%, #97cdfaff, #29a4f7ff)",
  "radial-gradient(50% 50% at 50% 50%, #faf761ff, #cac72aff)",
  "radial-gradient(50% 50% at 50% 50%, #b3b3b3ff, #7e7e7eff)",
];

const ITEMS = [
  "images/All-images/aston1.jpg",
  "images/All-images/audi1.jpg",
  "images/All-images/aventador1.jpg",
  "images/All-images/chevrolette1.jpg",
  "images/All-images/chiron3.jpg",
  "images/All-images/ferrari1.jpg",
  "images/All-images/jesko1.jpg",
  "images/All-images/mclaren2.jpg",
  "images/All-images/amg2.jpg",
  "images/All-images/gtr2.jpg",
  "images/All-images/pagani3.jpg",
  "images/All-images/turbo1.jpg",
];
// DOM Elements
const carNames = document.getElementById("carNames");
const carDetails = document.getElementById("carDetails");
const carImages = document.getElementById("car-images");
const headerImage = document.getElementById("header-image");
const heroSection = document.querySelector(".hero-section");

// Initial state
let carIndex = 0;
let headerIndex = 0;
let bgIndex = 0;

// Set initial content
function updateCarContent(index) {
  carNames.textContent = carHeaders[index];
  carDetails.textContent = carsDetails[index];
  carImages.style.background = `url(${carArrays[index]})`;
  carImages.style.backgroundSize = "cover";
  carImages.style.backgroundRepeat = "no-repeat";
  carImages.style.backgroundPosition = "center";
}

updateCarContent(carIndex);

// Rotate car content every 5 seconds
setInterval(() => {
  carIndex = (carIndex + 1) % carHeaders.length;
  updateCarContent(carIndex);
}, 5000);

// Rotate header image every 15 seconds with fade
setInterval(() => {
  headerIndex = (headerIndex + 1) % headerArray.length;
  bgIndex = (bgIndex + 1) % backgrounds.length;
  heroSection.style.background = backgrounds[bgIndex];
  headerImage.classList.add("fade-out");
  setTimeout(() => {
    headerImage.src = headerArray[headerIndex];
    headerImage.classList.remove("fade-out");
  }, 1000);
}, 15000);

const itemsBG = document.querySelectorAll(".item");

itemsBG.forEach((item, index) => {
  item.style.backgroundImage = `url(${ITEMS[index % ITEMS.length]})`;
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
});

const imageMap = {
  item1: [
    "images/All-images/aston1.jpg",
    "images/All-images/aston2.jpg",
    "images/All-images/aston3.jpg"
  ],
  item2: [
    "images/All-images/audi1.jpg",
    "images/All-images/audi2.jpg",
    "images/All-images/audi3.jpg"
  ],
  item3: [
    "images/All-images/aventador1.jpg",
    "images/All-images/aventador3.jpg",
    "images/All-images/aventador2.jpg"
  ],
  item4: [
    "images/All-images/chevrolette1.jpg",
    "images/All-images/chevrolette2.jpg",
    "images/All-images/chevrolette3.jpg"
  ],
  item5: [
    "images/All-images/chiron1.jpg",
    "images/All-images/chiron2.jpg",
    "images/All-images/chiron3.jpg"
  ],
  item6: [
    "images/All-images/ferrari1.jpg",
    "images/All-images/ferrari2.jpg",
    "images/All-images/ferrari3.jpg"
  ],
  item7: [
    "images/All-images/jesko1.jpg",

    "images/All-images/jesko2.jpg",

    "images/All-images/jesko3.jpg"
  ],
  item8: [
    "images/All-images/mclaren2.jpg",
    "images/All-images/mclaren1.jpg",
    "images/All-images/mclaren3.jpg"
  ],
  item9: [
    "images/All-images/amg1.jpg",
    "images/All-images/amg2.jpg",
    "images/All-images/amg3.jpg"
  ],
  item10: [
    "images/All-images/gtr1.jpg",
    "images/All-images/gtr2.jpg",
    "images/All-images/gtr3.jpg"
  ],
  item11: [
    "images/All-images/pagani2.jpg",
    "images/All-images/pagani1.jpg",
    "images/All-images/pagani3.jpg"
  ],
  item12: [
  "images/All-images/turbo1.jpg",
  "images/All-images/turbo2.jpg",
  "images/All-images/turbo3.jpg"
],
};

document.querySelectorAll(".itemButt").forEach((button) => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    window.location.href = `itemPage.html?index=${index}` ;
  });
});
const items = document.querySelectorAll(".itemButt");
items.forEach((itemButt) => {
  itemButt.addEventListener("click", () => {
    const itemId = itemButt.id;
    localStorage.setItem("selectedImages", JSON.stringify(imageMap[itemId]));
  });
});
