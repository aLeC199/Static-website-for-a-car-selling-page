const carHeaders = ["Mercedes benz", "Lamborghini", "Cat demon", "Draco-v46"];
const carsDetails = [
  "Luxury, innovation, exceptional Performance, Premium design....",
  "Sleek and premium build with comfort in mind......",
  "Iconic design and exceptional performance...",
  "Rugged and reliable. Built for adventure and off-road capability....",
];
const carArrays = [
  "../images/x3orr.jpg",
  "../images/lambo-show.jpg",
  "../images/demon-cat.jpg",
  "../images/draco.jpg",
];
const headerArray = [
  "../images/lamborghini.png",
  "../images/aventador.png",
  "../images/yellow-lambo.png",
  "../images/twin-lambo.png",
];
const backgrounds = [
  "radial-gradient(50% 50% at 50% 50%, #e41919ff, #ff0000ff)",
  "radial-gradient(50% 50% at 50% 50%, #97cdfaff, #29a4f7ff)",
  "radial-gradient(50% 50% at 50% 50%, #faf761ff, #cac72aff)",
  "radial-gradient(50% 50% at 50% 50%, #b3b3b3ff, #7e7e7eff)",
];

const ITEMS = [
  "images/All-images/Aston/aston1.jpg",
  "images/All-images/Audi/audi1.jpg",
  "images/All-images/aventador/aventador1.jpg",
  "images/All-images/Chevrolet/chevrolette1.jpg",
  "images/All-images/Chiron/chiron3.jpg",
  "images/All-images/Ferrari/ferrari1.jpg",
  "../images/All-images/Jesko/jesko1.jpg",
  "../images/All-images/McLaren/mclaren2.jpg",
  "../images/All-images/Mercedes/amg2.jpg",
  "../images/All-images/Nissan/gtr2.jpg",
  "../images/All-images/Pagani/pagani3.jpg",
  "../images/All-images/Porsche/turbo1.jpg",
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
    "../images/All-images/Aston/aston1.jpg",
    "../images/All-images/Aston/aston2.jpg",
    "../images/All-images/Aston/aston3.jpg"
  ],
  item2: [
    "../images/All-images/Audi/audi1.jpg",
    "../images/All-images/Audi/audi2.jpg",
    "../images/All-images/Audi/audi3.jpg"
  ],
  item3: [
    "../images/All-images/aventador/aventador1.jpg",
    "../images/All-images/aventador/aventador3.jpg",
    "../images/All-images/aventador/aventador2.jpg"
  ],
  item4: [
    "../images/All-images/Chevrolet/chevrolette1.jpg",
    "../images/All-images/Chevrolet/chevrolette2.jpg",
    "../images/All-images/Chevrolet/chevrolette3.jpg"
  ],
  item5: [
    "../images/All-images/Chiron/chiron1.jpg",
    "../images/All-images/Chiron/chiron2.jpg",
    "../images/All-images/Chiron/chiron3.jpg"
  ],
  item6: [
    "../images/All-images/Ferrari/ferrari1.jpg",
    "../images/All-images/Ferrari/ferrari2.jpg",
    "../images/All-images/Ferrari/ferrari3.jpg"
  ],
  item7: [
    "../images/All-images/Jesko/jesko1.jpg",

    "../images/All-images/Jesko/jesko2.jpg",

    "../images/All-images/Jesko/jesko3.jpg"
  ],
  item8: [
    "../images/All-images/McLaren/mclaren2.jpg",
    "../images/All-images/McLaren/mclaren1.jpg",
    "../images/All-images/McLaren/mclaren3.jpg"
  ],
  item9: [
    "../images/All-images/Mercedes/amg1.jpg",
    "../images/All-images/Mercedes/amg2.jpg",
    "../images/All-images/Mercedes/amg3.jpg"
  ],
  item10: [
    "../images/All-images/Nissan/gtr1.jpg",
    "../images/All-images/Nissan/gtr2.jpg",
    "../images/All-images/Nissan/gtr3.jpg"
  ],
  item11: [
    "../images/All-images/Pagani/pagani2.jpg",
    "../images/All-images/Pagani/pagani1.jpg",
    "../images/All-images/Pagani/pagani3.jpg"
  ],
  item12: [
  "../images/All-images/Porsche/turbo1.jpg",
  "../images/All-images/Porsche/turbo2.jpg",
  "../images/All-images/Porsche/turbo3.jpg"
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




