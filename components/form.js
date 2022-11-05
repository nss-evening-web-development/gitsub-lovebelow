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
