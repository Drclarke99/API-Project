// "https://acnhapi.com/v1/fish"
const fishListEl = document.querySelector('.fish__list');

async function displayFish() {
    const fishes = await fetch("https://acnhapi.com/v1/fish");
    const fishData = await fishes.json();
    let fishKeys = Object.entries(fishData);
    fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

async function renderFish(filter) {
  const fishes = await fetch("https://acnhapi.com/v1/fish");
  const fishData = await fishes.json();
  let fishKeys = Object.entries(fishData);
  if (filter === 'Z_TO_A') {
    fishKeys.sort();
    fishKeys.reverse();
  }
  else if (filter === 'A_TO_Z') {
    fishKeys.sort();
  }
  fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

async function searchFish(fishName) {
  const fish = await fetch(`https://acnhapi.com/v1/fish/name/${fishName}`);
  const fishData = await fish.json();
  let fishKeys = Object.entries(fishData);
  fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

function userHTML(user) {
  return `
    <div class="fish">
      <div class="fish__name">
        ${user[1].name['name-USen']}
      </div>
      <p class="fish__body">
        ${user[1]['museum-phrase']}
      </p>
      <div class="fish__price">
        Price: $${user[1].price}
      </div>
    </div>`;
}

function filterFish(event) {
  renderFish(event.target.value);
}

displayFish();
