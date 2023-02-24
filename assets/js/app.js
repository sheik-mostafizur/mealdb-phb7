// get food data from api
const foodData = async (category) => {
  const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`;

  try {
    const dataFetch = await fetch(API);
    const data = await dataFetch.json();
    showFoodItems(data.meals);
  } catch (err) {
    alert("Data not found");
    console.log(err.message);
  }
};

// show Food items
function showFoodItems(data) {
  let count = 0;

  // food_items id connected to createItem
  const food_items = document.getElementById("food_items");
  food_items.innerHTML = "";
  for (const singleData of data) {
    // createItem is appending
    food_items.appendChild(createItem(singleData));

    count++;
    if (count === 6) break;
  }

  // show all items
  const show_all_itemsBtn = document.getElementById("show_all_items");
  show_all_itemsBtn.addEventListener("click", () => {
    food_items.innerHTML = "";
    for (const singleData of data) {
      // createItem is appending
      food_items.appendChild(createItem(singleData));
    }
    show_all_itemsBtn.setAttribute("disabled", "disabled");
  });
  if (data.length <= 6) {
    show_all_itemsBtn.setAttribute("disabled", "disabled");
  }
}

// get value from banner input search any food category
function searchFood() {
  const search_food_items = document.getElementById("search_food_items");
  const search_food_btn = document.getElementById("search_food_btn");
  search_food_btn.addEventListener("click", function () {
    const searchData = search_food_items.value;
    foodData(searchData.toLowerCase());
    document.getElementById("show_all_items").removeAttribute("disabled");
  });
}
searchFood();
// default category
foodData("fish");
