// "https://acnhapi.com/v1/fish"
const fishListEl = document.querySelector('.fish__list');


async function main() {
    const drinks = await fetch("https://acnhapi.com/v1/fish/anchovy");
    const drinksData = await drinks.json();
    console.log(drinksData);
    let dataKeys = Object.entries(drinksData.name);
    let newData = dataKeys.map(key => key[1]);
    console.log(newData[0]);
}

main();

async function renderFish() {
    const fishes = await fetch("https://acnhapi.com/v1/fish");
    const fishData = await fishes.json();
    console.log(fishData);
    let fishKeys = Object.entries(fishData);
    console.log(fishKeys);
    //fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

renderFish();

function userHTML(user) {
  /*return `
    <div class="fish">
      <div class="fish__name">
        ${user.name}
      </div>
      <p class="fish__body">
        ${user.museum-phrase}
      </p>
      <div class="fish__price">
        Price: $${user.price}
      </div>
    </div>`;*/
}

