export const packagesForm = 
`<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Project Board name</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example 1">
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Description</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button type="submit" class="btn btn-primary mb-3">Create Project</button>
</div>`;
   
export const starForm = (object) => {
  document.getElementById(`starsForm`).innerHTML = `<h3>Add a New List</h3>
    <form id="submitStar">
    <div class="form-floating mb-1 col-sm-5">
      <input type="text" class="form-control" id="starName" placeholder="star name" required>
        <label for="floatingInput">Type your starred repo name here</label></div>
    <div class="form-floating mb-1 col-sm-5">
      <textarea class="form-control" placeholder="Describe your new starred repo here" id="starDescription" style="height: 200px" required></textarea>
      <label for="floatingTextarea">Describe your new starred repo here</label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit">Submit</button></form>`;
}
