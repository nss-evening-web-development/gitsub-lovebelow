console.log('Love!')

//QUERY SELECTORS
const stars = document.querySelector(`#stars`);
const form = document.querySelector('#starsForm');
const submitButton = document.querySelector('#submit');
const starButton = document.querySelector(`#starButton`);

//IMPORTS
import { renderToDom } from "./utils/renderToDom.js";
import { repoList } from "./data/reference.js";
import { starCard } from "./components/card.js";
import { starForm } from "./components/form.js";

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
form.addEventListener('submit', createStar);

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
