"use strict";
/*
import {
    contact
} from "./contact";
*/
console.log("Menu");
const menu = function () {
    let container = document.getElementById("Menu");
    if (container.childElementCount < 2) {
        let menuParagraph = document.createElement("p");
        menuParagraph.classList.add("menu");
        menuParagraph.id = "menu";
        menuParagraph.innerText = "The weekday menu depends on the seasonal fish catch. At weekends there is also a plethora of fresh meats.";
        container.appendChild(menuParagraph);
    }
    $('#content').empty();
    $('#content').append('<h2>'+ 'Νηστίσιμα διαθεσιμα κατά την σαρακοστή' +'</h2>');
};

export {
    menu
};