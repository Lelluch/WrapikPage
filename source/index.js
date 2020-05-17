import "./index.scss";
import { navigation } from "./js/sections/nav.js";
import { shop } from "./js/sections/shop.js";
import { foto } from "./js/sections/foto.js";

window.onload = function () {
  shop();
  foto();
  navigation();
};
