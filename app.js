// "https://acnhapi.com/v1/fish"
const fishListEl = document.querySelector('.fish__list');

async function renderFish() {
    const fishes = await fetch("https://acnhapi.com/v1/fish");
    const fishData = await fishes.json();
    let fishKeys = Object.entries(fishData);
    fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

renderFish();

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

