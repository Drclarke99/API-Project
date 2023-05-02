// "https://acnhapi.com/v1/fish"
const fishListEl = document.querySelector('.fish__list');


async function main() {
    const drinks = await fetch("https://acnhapi.com/v1/fish/anchovy");
    const drinksData = await drinks.json();
    console.log(drinksData.name);
    let dataKeys = Object.entries(drinksData.name);
    let newData = dataKeys.map(key => key[1]);
    console.log(newData[0]);
}

main();

async function renderFish() {
    const fishes = await fetch("https://acnhapi.com/v1/fish");
    const fishData = await fishes.json();
    let fishKeys = Object.entries(fishData);
    console.log(fishKeys);
    let newFishData = fishKeys.map(key => fishHTML(key));
    console.log(newFishData);
    let newfishHTML = fishKeys.map(user => userHTML(user));
    console.log(newfishHTML);
    //fishListEl.innerHTML = fishKeys.map(user => userHTML(user)).join("");
}

renderFish();

function fishHTML(post) {
    return post[1];
}

function userHTML(user) {
  console.log(user[0]);

  return user;
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

