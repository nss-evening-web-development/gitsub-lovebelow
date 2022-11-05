

import { repoList } from "./data/reference.js";
import { card } from "./components/card.js";
import { repoFormonDom } from "./components/form.js";

//function to get the cards on the DOM
// .forEach()
const renderRepoCards = (array) => {
	let refStuff = "";
	array.forEach((object) => {
		refStuff += card(object);
	});
	renderToDom("#cards", refStuff);
};
renderRepoCards(repoList);

const formFill = () => {
	const domString = repoFormonDom;

	renderToDom("#repoform", domString);
};
formFill(repoFormonDom);

const form = document.querySelector("#repoform");

const addRepo = (event) => {
	event.preventDefault();
	const repoObj = {
		id: repoList.length + 1,
		name: document.querySelector("#addRepo").value,
		description: document.querySelector("#description").value,
	};
	console.log("hey");
	repoList.push(repoObj);
	renderRepoCards(repoList);
	form.reset();
};

form.addEventListener("submit", addRepo);
//StartApp
// const StartApp = () => {
// 	renderToDom(repoList);
// };
// StartApp();
import { overviewCard } from "./components/card.js";
import { formOnDom } from "./components/form.js";
import { repoList } from "./data/reference.js";
import { renderToDom } from "./utils/renderToDom.js";


const renderOverviewCards = (array) => {
  let refStuff = "";

  array.forEach((item) => {
    refStuff += overviewCard(item);
  })
  renderToDom("#pinned", refStuff);
};
renderOverviewCards(repoList);


const formOverview = () => {
  const domString = formOnDom;

  renderToDom('#form', domString)
};
formOverview(formOnDom)


const createId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

const overviewForm = document.querySelector('form');

const createPin = (event) => {
  event.preventDefault();

const newPin = {
  id: createId(repoList),
  name: document.querySelector("#name").value,
  description: document.querySelector("#description").value,
};

console.log(newPin);
repoList.push(newPin);
renderOverviewCards(repoList);

form.reset();
}

form.addEventListener('submit', createPin);
    


import {packages} from "./data/reference.js";
import {packageCard} from "./components/card.js";
import {renderToDom} from "./utils/renderToDom.js";
import {packagesForm} from "./components/form.js";

import {packages} from "./data/reference.js";
import {packageCard} from "./components/card.js";
import {renderToDom} from "./utils/renderToDom.js";
import {packagesForm} from "./components/form.js";


const renderOverviewCards = (array) => {
  let refStuff = "";

  array.forEach((item) => {
    refStuff += overviewCard(item);
  })
  renderToDom("#pinned", refStuff);
};
renderOverviewCards(repoList);


const formOverview = () => {
  const domString = formOnDom;

  renderToDom('#form', domString)
};
formOverview(formOnDom)


const createId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

const form = document.querySelector('form');

const createPin = (event) => {
  event.preventDefault();

const newPin = {
  id: createId(repoList),
  name: document.querySelector("#name").value,
  description: document.querySelector("#description").value,
};

console.log(newPin);
repoList.push(newPin);
renderOverviewCards(repoList);

form.reset();
}

form.addEventListener('submit', createPin);



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
