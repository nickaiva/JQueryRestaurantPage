"use strict";
console.log("Running");
import {menu} from "./menu";
import {contact} from "./contact";

//menu();
//contact();

let menuContainer = document.getElementById("Menu");
menuContainer.addEventListener("click", menu);

let reservationContainer = document.getElementById("Reservation");
reservationContainer.addEventListener("click", contact);
