export const packagesForm = 
`<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Packages Board</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example 1">
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Description</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button type="submit" class="btn btn-primary mb-3">Create Project</button>
</div>`;

// export const projectFormOnDom = () => {
//   const domString = `
//   <div class="form-floating mb-3">
//   <input type="text" class="form-control" id="name" placeholder="Name" required>
//   <label for="floatingInput">Name</label>
// </div>
// <div class="form-floating mb-3">
// <input type="text" class="form-control" id="description" placeholder="Project Description" required>
// <label for="floatingInput">Project Description</label>
// </div>

// <button type="submit" class="btn btn-success">Add New Project</button>
// `
// return domString
// }

export const repoFormonDom = `
	<div class="form-floating mb-3">
  <label for="floatingInput"></label>
		<input
			type="text"
			class="form-control"
			id="addRepo"
			placeholder="Add A Repository"
			required
		/>

		<label for="floatingInput"></label>
    <input
			type="text"
			class="form-control"
			id="description"
			placeholder="Add A Description"
			required
		/>
		<button type="submit" class="btn btn-success" placeholder="Add New Repository">
			New Repo
		</button>
	</div>`;
   
export const formOnDom = 
  `<div class="form-floating mb-3">
  <input type="text" class="form-control" id="name" placeholder="Name" required>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="description" placeholder="Description" required>
  <label for="floatingDescription">Description</label>
</div>
<button type="submit" class="btn btn-success">Submit</button>`;

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
