// console.log('Love!')git checkout reportError

import { repoList } from "./data/reference.js";
import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./components/card.js";
import { repoFormonDom } from "./components/form.js";

//function to get the cards on the DOM
// .forEach()
const renderCards = (array) => {
	let refStuff = "";
	array.forEach((object) => {
		refStuff += card(object);
	});
	renderToDom("#cards", refStuff);
};
renderCards(repoList);

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
	renderCards(repoList);
	form.reset();
};

form.addEventListener("submit", addRepo);
//StartApp
// const StartApp = () => {
// 	renderToDom(repoList);
// };
// StartApp();
