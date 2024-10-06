import {renderPlanet} from "./src/planetRendering.js";
import {createControls} from "./src/orbitControls.js";
import {setupButtons} from "./src/controlRendering.js";

const path = window.location.pathname;

const pathSegments = path.split('/');

const planetName = pathSegments[1];

console.log(planetName);


// //fetch planet name
// fetch ("", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//
//     }
// })
//
// //fetch planet data from planet name
// fetch ("", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//
//     }
// })

document.addEventListener("DOMContentLoaded", () => {
    setupButtons();  // Initialize the buttons

    // You can also call the rendering function here
    renderPlanet("Data\\star_data2.json");
});