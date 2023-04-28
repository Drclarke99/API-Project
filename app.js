// "https://acnhapi.com/v1/fish"
const fishListEl = document.querySelector('.fish__list');


async function main() {
    const drinks = await fetch("https://acnhapi.com/v1/fish");
    const drinksData = await drinks.json();
    console.log(drinksData);
}

main();

async function renderFish() {
    const fish = await fetch(`https://acnhapi.com/v1/fish/`);
    const fishData = await fish.json();
    fishListEl.innerHTML = fishData.map(post => postHTML(post)).join("");
}

function postHTML(post) {
    return `
    <div class="fish">
      <div class="fish__name">
        ${post.name}
      </div>
      <p class="fish__body">
        ${post.museum-phrase}
      </p>
      <div class="fish__price">
        Price: $${post.price}
      </div>
    </div>`;
}

renderFish();