import { projectList } from "./data/reference.js"
import { renderToDom } from "./utils/renderToDom.js"
import { projectCard } from "./components/card.js";
import { projectFormOnDom } from "./components/form.js"

const renderProjectCards = (array) => {
  let refStuff = "<h1 class='text-white'>Projects</h1>";

  array.forEach(item => {
    refStuff += projectCard(item)
  })

  renderToDom("#project-cards", refStuff)
};

renderProjectCards(projectList)

const projectListFormLogic = () => {
  const projectForm = document.querySelector("#project-list")

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const newProject = {
      id: projectList.length + 1,
      name: document.querySelector("#name").value,
      };

      projectList.push(newProject);
      renderProjectCards(projectList);
})
};


projectListFormLogic()
renderToDom("#project-form", projectFormOnDom )
renderProjectCards(projectList)
