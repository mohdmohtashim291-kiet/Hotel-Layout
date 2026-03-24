let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem() {
  const name = document.getElementById("itemName").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (!name || !category || !description) {
    alert("Please fill all fields");
    return;
  }

  const item = { name, category, description };
  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));

  document.getElementById("itemName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";

  displayItems();
}

function displayItems() {
  const container = document.getElementById("items");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-card";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(div);
  });
}

displayItems();