import { card } from "./components/card.js";
import { formOnDom } from "./components/form.js";
import { repoList } from "./data/reference.js";
import { renderToDom } from "./utils/renderToDom.js";


const renderCards = (array) => {
  let refStuff = "";

  array.forEach((item) => {
    refStuff += card(item);
  })
  renderToDom("#pinned", refStuff);
};
renderCards(repoList);


const formFill = () => {
  const domString = formOnDom;

  renderToDom('#form', domString)
};
formFill(formOnDom)


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
renderCards(repoList);

form.reset();
}

form.addEventListener('submit', createPin);
    

   

    

// formSubmit()


//   

//   console.log('hi');
//   repoList.push(newPin);
//   renderCards(repoList);
// };

  


    

//     repoList.push(newPin);
//     renderCards(repoList);

//     form.reset();
//   });
// };
// formSubmit();
// console.log('hi')
