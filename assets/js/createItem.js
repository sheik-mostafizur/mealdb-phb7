function createItem(data) {
  // get data from api
  const {idMeal, strMeal, strInstructions, strMealThumb, strTags} = data;

  // generate Id for modal
  const generateId = (
    strMeal.split(" ").join("_") +
    "_" +
    idMeal
  ).toLowerCase();

  // create item element and return a div
  const div = document.createElement("div");
  div.className = "col-6";
  div.innerHTML = `<div class="card mb-3">
<div class="row g-0 align-items-center">
  <div class="col-md-4">
    <img style="height:200px; object-fit:cover;" src="${strMealThumb}" class="img-fluid rounded-start" alt="${strTags}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${strMeal}</h5>
      <p class="card-text">${strInstructions.slice(0, 100)}</p>
      <!-- modal -->
      <div>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${generateId}">
          View Details
        </button>
        <div class="modal fade" id="${generateId}" tabindex="-1" aria-labelledby="${generateId}Label" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${generateId}Label">${strMeal}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <img src="${strMealThumb}" class="img-fluid" alt="${strTags}">
  <hr/>
                <p>${strInstructions}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

  return div;
}
