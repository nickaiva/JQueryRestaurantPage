"use strict";
console.log("Contact");
const contact = function () {
    let container = document.getElementById("Reservation");
    if (container.childElementCount < 2) {
        let contactParagraph = document.createElement("p");
        contactParagraph.classList.add("contact");
        contactParagraph.id = "contact";
        contactParagraph.innerText = "Address 123 national road Athens Thessaloniki 12344 Telephone: 800 12 34 789 email loukoulos@gmail.com";
        container.appendChild(contactParagraph);
    }
    $('#content').empty();
};

export {
    contact
};