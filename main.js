console.log('Love!')

//IMPORTS
import { renderToDom } from "./utils/renderToDom";
import {  } from "module";

//CARD RENDER
const dataOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString += `<div class="card text-center ${repo.name}" style="width: 12rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
    </div>
  </div>`;
  }
  renderToDom("#studentContainer", domString);
}

//STARRED REPOS
function starredRepos(array, typeString) {
  const repoStars = [];
  for (const repo of array) {
    if (repo.starred === true) {
      repoStars.push(repo);
    }
  }
  return repoStars;
}
