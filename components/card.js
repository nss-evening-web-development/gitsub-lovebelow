//Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/

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

export const packageCard = (Object) => {
	return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
};
