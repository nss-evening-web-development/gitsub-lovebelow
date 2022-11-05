//Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/

export const card = (object) => {
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

export const packageCard = (Object) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
}
