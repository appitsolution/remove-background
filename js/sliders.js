const switcherEl = document.querySelector(".makes__example-switcher");
const makesList = document.querySelector(".makes__example-rules");

const swiper = new Swiper("#hero", {
  slidesPerView: 1,
  spaceBetween: 1,
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const swiper2 = new Swiper("#example", {
  slidesPerView: 1,
  spaceBetween: 1,
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper3 = new Swiper("#gallery", {
  slidesPerView: 3,
  spaceBetween: 3,
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slideImg1 = "./assets/makes-slider/slide-1/people1.webp";
const slideImg2 = "./assets/makes-slider/slide-1/people2.webp";
const slideImg3 = "./assets/makes-slider/slide-1/people3.webp";
const slideImg4 = "./assets/makes-slider/slide-1/people4.webp";

const slideImg5 = "./assets/makes-slider/slide-2/product1.webp";
const slideImg6 = "./assets/makes-slider/slide-2/product2.webp";
const slideImg7 = "./assets/makes-slider/slide-2/product3.webp";
const slideImg8 = "./assets/makes-slider/slide-2/product4.webp";

const slideImg9 = "./assets/makes-slider/slide-3/graphic1.webp";
const slideImg10 = "./assets/makes-slider/slide-3/graphic2.webp";
const slideImg11 = "./assets/makes-slider/slide-3/graphic3.webp";
const slideImg12 = "./assets/makes-slider/slide-3/graphic4.webp";

const slideImg13 = "./assets/makes-slider/slide-4/car1.webp";
const slideImg14 = "./assets/makes-slider/slide-4/car2.webp";
const slideImg15 = "./assets/makes-slider/slide-4/car3.webp";
const slideImg16 = "./assets/makes-slider/slide-4/car4.webp";

const slidesMakes = {
  people: [
    {
      img: slideImg1,
      desc: `Upload image for photo editing to perfectly fit Instagram, Facebook, TikTok, YT, passport`,
    },
    {
      img: slideImg2,
      desc: `Remove background from image free and keep it transparent for editing`,
    },
    {
      img: slideImg3,
      desc: `Or add new background image to your foreground to create cool profile pictures`,
    },
    {
      img: slideImg4,
      desc: `Download a ready new image or edit it with a built-in Retoucher editor`,
    },
  ],
  products: [
    {
      img: slideImg5,
      desc: `Upload any photo to create a perfect product image that sells`,
    },
    {
      img: slideImg6,
      desc: `The app will remove the background and keep the product in the foreground only`,
    },
    {
      img: slideImg7,
      desc: `Keep white, transparent background, or choose the one that fits your product`,
    },
    {
      img: slideImg8,
      desc: `Download a ready product image that already meets the requirements of online marketplaces`,
    },
  ],
  graphics: [
    {
      img: slideImg9,
      desc: `Upload an image to create professional content for your business campaign`,
    },
    {
      img: slideImg10,
      desc: `Remove background online free and create a custom design`,
    },
    {
      img: slideImg11,
      desc: `Use Retoucher editor to delete background from image and make your design shine`,
    },
    {
      img: slideImg12,
      desc: `Download new images in a high resolution one by one or in a batch`,
    },
  ],
  car: [
    {
      img: slideImg13,
      desc: `Upload photos of a car that you want to sell`,
    },
    {
      img: slideImg14,
      desc: `Remove image backgrounds and keep only the car in the foreground`,
    },
    {
      img: slideImg15,
      desc: `Add white, transparent, or a customized background to make image look more appealing`,
    },
    {
      img: slideImg16,
      desc: `Get ready new images and post your ad`,
    },
  ],
};

switcherEl.addEventListener("click", ({ target }) => {
  const buttonsSwitcher = document.querySelectorAll(
    ".makes__example-switcher-button"
  );
  if (target.nodeName !== "BUTTON") return;
  if (target.id === "makes-1") {
    const addSlides = slidesMakes.people.map(
      (item) =>
        `<li class="makes__example-rules-item">
      <div class="makes__example-rules-item-image-block">

        <img
          class="makes__example-rules-item-image"
          src=${item.img}
        />
      </div>
      <p class="makes__example-rules-item-desc">
        ${item.desc}
      </p>
    </li>`
    );
    makesList.innerHTML = addSlides.join("");
    buttonsSwitcher.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
  }
  if (target.id === "makes-2") {
    const addSlides = slidesMakes.products.map(
      (item) =>
        `<li class="makes__example-rules-item">
      <div class="makes__example-rules-item-image-block">

        <img
          class="makes__example-rules-item-image"
          src=${item.img}
        />
      </div>
      <p class="makes__example-rules-item-desc">
        ${item.desc}
      </p>
    </li>`
    );
    makesList.innerHTML = addSlides.join("");
    buttonsSwitcher.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
  }
  if (target.id === "makes-3") {
    const addSlides = slidesMakes.graphics.map(
      (item) =>
        `<li class="makes__example-rules-item">
      <div class="makes__example-rules-item-image-block">

        <img
          class="makes__example-rules-item-image"
          src=${item.img}
        />
      </div>
      <p class="makes__example-rules-item-desc">
        ${item.desc}
      </p>
    </li>`
    );
    makesList.innerHTML = addSlides.join("");
    buttonsSwitcher.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
  }
  if (target.id === "makes-4") {
    const addSlides = slidesMakes.car.map(
      (item) =>
        `<li class="makes__example-rules-item">
      <div class="makes__example-rules-item-image-block">

        <img
          class="makes__example-rules-item-image"
          src=${item.img}
        />
      </div>
      <p class="makes__example-rules-item-desc">
        ${item.desc}
      </p>
    </li>`
    );
    makesList.innerHTML = addSlides.join("");
    buttonsSwitcher.forEach((item) => {
      item.classList.remove("active");
    });
    target.classList.add("active");
  }
});
