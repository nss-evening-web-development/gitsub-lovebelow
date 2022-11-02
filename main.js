import { projectList } from "./data/reference.js"
import { renderToDom } from "./utils/renderToDom.js"
import { projectCard } from "./components/card.js";

const renderProjectCards = (array) => {
  let refStuff = "<h1 class='text-white'>Projects</h1>";

  array.forEach(item => {
    refStuff += projectCard(item)
  })

  renderToDom("#new-project", refStuff)
};

renderProjectCards(projectList)



const projectListFormLogic = () => {
  const projectForm = document.querySelector("project-form")

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newProject = {
      project: projectList.length + 1,
      name: 
    }
  })
};
