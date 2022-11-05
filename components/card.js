//Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/

export const overviewCard = (object) => {

	return `
  <div class="card">
  <h5 class="card-header">${object.name}</h5>
  <div class="card-body">
    <h5 class="card-title">${object.description}</h5>
    <p class="card-text"></p>
    
  </div>
</div>
  `;
};
export const card = (object) => {

	return `
  <div class="card">
  <h5 class="card-header">${object.name}</h5>
  <div class="card-body">
    <h5 class="card-title">${object.description}</h5>
    <p class="card-text"></p>
    
  </div>
</div>
  `;
};




export const packageCard = (object) => {
  return `

  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p class="card-text">${object.description}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div
</div>
  `;
};
