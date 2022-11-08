import { repoList } from "./data/reference.js";
import { card } from "./components/card.js";
import { repoFormonDom } from "./components/form.js";
import { packages} from "./data/reference.js";
import { packageCard} from "./components/card.js";
import { renderToDom} from "./utils/renderToDom.js";
import { packagesForm} from "./components/form.js";
import { overviewCard } from "./components/card.js";
import { formOnDom } from "./components/form.js";
import { starCard } from "./components/card.js";
import { starForm } from "./components/form.js";

//function to get the cards on the DOM
// .forEach()
const renderRepoCards = (array) => {
	let refStuff = "";
	array.forEach((object) => {
		refStuff += card(object);
	});
	renderToDom("#cards", refStuff);
};
// renderRepoCards(repoList);

const formFill = () => {
	const domString = repoFormonDom;

	renderToDom("#repoform", domString);
};
// formFill(repoFormonDom);

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

//Repo render on click
const repoButton = document.querySelector('#repoButton');

const overviewDiv = document.querySelector('#overviewDiv');

repoButton.addEventListener('click', () => {
  overviewDiv.style.display = "none";
  formFill(repoFormonDom);
  renderRepoCards(repoList);
})

//Render Overview Cards to DOM
const renderOverviewCards = (array) => {
  let refsStuff = "";

  array.forEach((item) => {
    refsStuff += overviewCard(item);
  })
  renderToDom("#pinned", refsStuff);
};
renderOverviewCards(repoList);

//Render Overview Form to DOM
const formOverview = () => {
  const domString = formOnDom;

  renderToDom('#overviewForm', domString)
};
formOverview(formOnDom);

const createOverviewId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
};

const overviewForm = document.querySelector('form');

const createPin = (event) => {
  event.preventDefault();

const newPin = {
  id: createOverviewId(repoList),
  name: document.querySelector("#name").value,
  description: document.querySelector("#description").value,
};

console.log(newPin);
repoList.push(newPin);
renderOverviewCards(repoList);

overviewForm.reset();
}

overviewForm.addEventListener('submit', createPin);

//Overview Query Selectors
const overviewButton = document.querySelector(`#overviewButton`);

// Overview and Overview Form Render
overviewButton.addEventListener('click', () => {
  renderOverviewCards(repoList);
  formOverview(formOnDom);
});


//PACKAGES//
const renderCards = (array) => {
    let refStuff = "";

array.forEach ((item) => {
    refStuff += packageCard(item);
})

    renderToDom("#package-page", refStuff);
};


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

// renderToDom("#package-form", packagesForm);
// packages();
packageOnDom(packages);
// packagesForm();

//Packages render on click
const packagesButton = document.querySelector('#packagesButton');

const repoDiv = document.querySelector('#repoDiv');
// const starDiv = document.querySelector('#starDiv');

packagesButton.addEventListener('click', () => {
  overviewDiv.style.display = "none";
  repoDiv.style.display = "none";
  // starDiv.style.display = "none"
  renderToDom("#package-form", packagesForm);
  renderCards(packages);
})


//QUERY SELECTORS
const stars = document.querySelector(`#stars`);
const starsForm = document.querySelector('#starsForm');
const starButton = document.querySelector(`#starButton`);


//CREATE ID
const createId = (array) => {
  if (array.length) {
    const idArray = array.map(el => el.id);
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

//STARS RENDER
const renderStars = (array) => {
  let refStuff = "";
  array.forEach((item) => {
    refStuff += starCard(item);
  })
  renderToDom(`#stars`, refStuff);
}

// const starDiv = document.querySelector('#starDiv');
const packageDiv = document.querySelector('#packageDiv');

// renderStars(starredRepos);//STAR BUTTON + FORM RENDER
starButton.addEventListener('click', () => {
  repoDiv.style.display = "none";
  overviewDiv.style.display = "none";
  packageDiv.style.display = "none";
  starForm();
  renderStars(starredRepos);
  console.log('hi!');
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

//STARRED REPOS
const starredRepos = repoList.filter(repo => repo.starred === true);
