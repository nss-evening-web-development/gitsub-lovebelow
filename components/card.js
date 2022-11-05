//Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/

export const card = (object) => {
  return `
  <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
}

export const packageCard = (obj) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="#" id="create-proj" class="btn btn-primary">Learn more</a>
  </div>
</div>
  `
}

export const projectCard = (object) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p class="card-text">${object.description}</p>
    <a href="#" id= "${object.id}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
}
