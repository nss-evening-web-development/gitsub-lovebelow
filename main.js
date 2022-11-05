console.log('Love!')

import {packages} from "./data/reference.js";
import {packageCard} from "./components/card.js";
import {renderToDom} from "./utils/renderToDom.js";
import {packagesForm} from "./components/form.js";


const renderCards = (array) => {
    let refStuff = "";

array.forEach ((item) => {
    refStuff += packageCard(item);
})

    renderToDom("#package-page", refStuff);
};

renderCards(packages);

const packageOnDom = () => {
    const packagesForm = document.querySelector("#package-form")

    packagesForm.addEventListener('submit', e => {
        e.preventDefault();

        const newPackage = {
            id: packages.length + 1,
            name: document.querySelector("#name").value,
            description: document.querySelector("#description").value
        };
    
        packages.push(newPackage)
        renderCards(packages);
        console.log(packages)
        console.log(newPackage)
    })
};

renderToDom("#package-form", packagesForm);
packages();
packageOnDom();
packagesForm();