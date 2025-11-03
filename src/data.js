// src/data.js

// Import all your menu and gallery images at the top
import dadiangasBrewImg from "./assets/img/dadiangasbrew.jpg";
import kapeBarakoImg from "./assets/img/kapebarakohot.jpg";
import mountMochaImg from "./assets/img/mountmochahot.jpg";
import tunaCapitalImg from "./assets/img/tunacapitalhot.jpg";
import passionfruitImg from "./assets/img/iced.coffee/Passionfruit Cold Brew.jpg";
import pineappleTeaImg from "./assets/img/iced.coffee/Pineapple Iced Tea.png";
import saranganiIcedImg from "./assets/img/iced.coffee/Sarangani Iced Coffee.jpg";
import ubeRollImg from "./assets/img/Pastries/Ube roll.png";
import bananaBreadImg from "./assets/img/Pastries/Banana Chocolate.png";

import cozyInteriorImg from "./assets/img/Gallery/Cozy Interior.jpg";
import baristaImg from "./assets/img/Gallery/The Barista in Action.jpg";
import beansImg from "./assets/img/Gallery/Beans.jpg";
import communityVibeImg from "./assets/img/Gallery/The Community Vibe.jpg";
import welcomingImg from "./assets/img/Gallery/Welcoming.jpg";
import finalProductImg from "./assets/img/Gallery/The Final Product.jpg";

export const menuData = [
  {
    name: "Dadiangas Brew",
    price: "₱90",
    description:
      "A smooth and creamy latte with a perfectly pulled shot of espresso and velvety steamed milk. Topped with simple, elegant latte art.",
    image: dadiangasBrewImg, // Use the imported variable
    category: "hot",
    alt: "Dadiangas Brew",
  },
  {
    name: "Kapeng Barako",
    price: "₱130",
    description:
      "For the true coffee lover. A strong, pungent, and intensely flavored cup of traditional Liberica coffee, brewed to perfection.",
    image: kapeBarakoImg, // Use the imported variable
    category: "hot",
    alt: "Kapeng Barako",
  },
  {
    name: "Mount Matutum Mocha",
    price: "₱145",
    description:
      "A rich and decadent treat. Our classic latte blended with premium local tablea chocolate, offering a true taste of the south.",
    image: mountMochaImg, // Use the imported variable
    category: "hot",
    alt: "Mount Matutum Mocha",
  },
  {
    name: "Tuna Capital Latte",
    price: "₱100",
    description:
      "A smooth and creamy latte with a perfectly pulled shot of espresso and velvety steamed milk. Topped with simple, elegant latte art.",
    image: tunaCapitalImg, // Use the imported variable
    category: "hot",
    alt: "Tuna Capital Latte",
  },
  {
    name: "Passionfruit Cold Brew",
    price: "₱140",
    description:
      "A tropical twist on a modern classic. Our smooth cold brew is infused with a sweet and tangy passionfruit syrup for a uniquely refreshing experience.",
    image: passionfruitImg, // Use the imported variable
    category: "iced",
    alt: "Passionfruit Cold Brew",
  },
  {
    name: "Pineapple Iced Tea",
    price: "₱90",
    description:
      "Freshly brewed black tea sweetened with a splash of local pineapple juice. The perfect sweet and tangy cooler for a sunny day.",
    image: pineappleTeaImg, // Use the imported variable
    category: "iced",
    alt: "Pineapple Iced Tea",
  },
  {
    name: "Sarangani Iced Coffee",
    price: "₱100",
    description:
      "Our classic Dadiangas brew, chilled and served over ice. A crisp, strong, and refreshing kick to beat the heat.",
    image: saranganiIcedImg, // Use the imported variable
    category: "iced",
    alt: "Sarangani Iced Coffee",
  },
  {
    name: "Ube Halaya Roll",
    price: "₱95",
    description:
      "A vibrant and sweet purple yam (ube) jam swirled into a soft, fluffy bread roll. A beloved Filipino classic.",
    image: ubeRollImg, // Use the imported variable
    category: "pastries",
    alt: "Ube Halaya Roll",
  },
  {
    name: "Banana Chocolate Chip Bread",
    price: "₱80",
    description:
      "A moist, rich banana bread generously studded with chocolate chips, perfect for a comforting snack.",
    image: bananaBreadImg, // Use the imported variable
    category: "pastries",
    alt: "Banana Chocolate Chip Bread",
  },
];

export const galleryData = [
  { src: cozyInteriorImg, alt: "Cozy Interior" },
  { src: baristaImg, alt: "The Barista in action" },
  { src: beansImg, alt: "Coffee Beans" },
  { src: communityVibeImg, alt: "The Community Vibe" },
  { src: welcomingImg, alt: "Welcoming" },
  { src: finalProductImg, alt: "Final Product" },
];
