//Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/

export const overviewCard = (object) => {
  return `
  <div class="card">
  <h5 class="card-header">Pinned</h5>
  <div class="card-body">
    <h5 class="card-title name">${object.name}</h5>
    <p class="card-text description">${object.description}</p>
    <button id="btn--${object.id}" class="btn btn-primary">Go somewhere</button>
  </div>
</div>
  `
}

export const packageCard = (object) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p class="card-text">${object.description}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div
</div>
  `
}
