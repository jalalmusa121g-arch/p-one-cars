/* =====================================================
   P ONE CARS
   WEBSITE JAVASCRIPT
===================================================== */


/* ================= CAR DATA ================= */

const cars = [

  {
    name: "Toyota Camry",
    type: "Premium Sedan",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85",
    description:
      "A stylish and dependable sedan for drivers who want comfort, presence and everyday practicality."
  },

  {
    name: "Toyota Venza",
    type: "Premium Crossover",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85",
    description:
      "A sophisticated crossover combining SUV practicality with a refined road presence."
  },

  {
    name: "Lexus RX 350",
    type: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Luxury, comfort and commanding SUV styling come together in the Lexus RX 350."
  },

  {
    name: "Mercedes-Benz GLE",
    type: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    description:
      "A premium SUV designed for drivers who appreciate luxury, technology and strong road presence."
  },

  {
    name: "Honda Accord",
    type: "Executive Sedan",
    image:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    description:
      "A refined executive sedan with an elegant design and comfortable driving experience."
  },

  {
    name: "Range Rover",
    type: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
    description:
      "A statement luxury SUV combining premium design, comfort and commanding presence."
  }

];


/* ================= ELEMENTS ================= */

const carsGrid = document.getElementById("carsGrid");

const modal = document.getElementById("carModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalCloseTwo = document.getElementById("modalCloseTwo");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.getElementById("modalCategory");
const modalWhatsapp = document.getElementById("modalWhatsapp");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const header = document.getElementById("header");

const year = document.getElementById("year");


/* ================= CREATE CAR CARDS ================= */

function displayCars() {

  if (!carsGrid) return;

  carsGrid.innerHTML = "";

  cars.forEach((car, index) => {

    const card = document.createElement("article");

    card.className = "car-card";

    card.innerHTML = `

      <div class="car-image">

        <img
          src="${car.image}"
          alt="${car.name}"
          loading="lazy"
        >

        <span class="car-label">
          FEATURED
        </span>

      </div>

      <div class="car-info">

        <h3>${car.name}</h3>

        <p class="car-type">
          ${car.type}
        </p>

        <div class="car-footer">

          <span>
            P ONE CARS
          </span>

          <button
            class="view-car"
            data-index="${index}"
          >
            View Car →
          </button>

        </div>

      </div>
    `;

    carsGrid.appendChild(card);

  });


  document.querySelectorAll(".view-car").forEach(button => {

    button.addEventListener("click", () => {

      const index = Number(button.dataset.index);

      openModal(index);

    });

  });

}


/* ================= OPEN MODAL ================= */

function openModal(index) {

  const car = cars[index];

  if (!car) return;

  modalImage.src = car.image;
  modalImage.alt = car.name;

  modalTitle.textContent = car.name;

  modalCategory.textContent =
    `${car.type} • P ONE CARS`;

  modalDescription.textContent =
    car.description;

  const message =
    `Hello P ONE CARS, I am interested in the ${car.name}. Please send me more information.`;

  modalWhatsapp.href =
    `https://wa.me/2348062338994?text=${encodeURIComponent(message)}`;

  modal.classList.add("active");

  document.body.classList.add("modal-open");

}


/* ================= CLOSE MODAL ================= */

function closeModal() {

  modal.classList.remove("active");

  document.body.classList.remove("modal-open");

}


modalClose.addEventListener("click", closeModal);

modalCloseTwo.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);


/* ESC KEY */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeModal();

  }

});


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


/* ================= HEADER SCROLL ================= */

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* ================= YEAR ================= */

if (year) {

  year.textContent = new Date().getFullYear();

}


/* ================= IMAGE ERROR HANDLING ================= */

document.addEventListener("error", (event) => {

  if (event.target.tagName === "IMG") {

    event.target.style.background = "#191919";

  }

}, true);


/* ================= START ================= */

displayCars();