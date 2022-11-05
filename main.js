

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

console.log('Love!')

import {packages} from "./data/reference.js";
import {packageCard} from "./components/card.js";
import {renderToDom} from "./utils/renderToDom.js";
import {packagesForm} from "./components/form.js";


//QUERY SELECTORS
const stars = document.querySelector(`#stars`);
const starsForm = document.querySelector('#starsForm');
const submitButton = document.querySelector('#submit');
const starButton = document.querySelector(`#starButton`);

//CARD RENDER
const renderStars = (array) => {
  let refStuff = "";
  array.forEach((item) => {
    refStuff += starCard(item);
  })
  renderToDom(`#stars`, refStuff);
}

//CREATE ID
const createId = (array) => {
  if (array.length) {
    const idArray = array.map(el => el.id);
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

//STARRED REPOS
const starredRepos = repoList.filter(repo => repo.starred === true);

// renderStars(starredRepos);//STAR BUTTON + FORM RENDER
starButton.addEventListener('click', () => {
  starForm();
  renderStars(starredRepos);
})

//CREATNG NEW STARRED REPOS
const createStar = (e) => {
  e.preventDefault();
    const newStar = {
      id: createId(starredRepos),
      name: document.querySelector('#starName').value,
      description: document.querySelector(`#starDescription`).value,
      starred: true,
      pinned: false
    }
  starredRepos.push(newStar);
  document.querySelector('#submitStar').reset();

  console.log(repoList);
  console.log(starredRepos);

  renderStars(starredRepos);
}

//SUBMIT EVENT LISTENER
starsForm.addEventListener('submit', createStar);

//REMOVE STAR
stars.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = starredRepos.findIndex(e => e.id === Number(id));
    const removed = starredRepos.splice(index, 1);

    starForm();
    renderStars(starredRepos);
  }
});

//PACKAGES//
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
