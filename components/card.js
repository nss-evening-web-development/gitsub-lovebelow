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




export const packageCard = (obj) => {
  return `

  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="#" id="create-proj" class="btn btn-primary">Learn more</a>
  </div>
</div>
  `;
};
