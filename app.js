// "https://acnhapi.com/v1/fish"

async function main() {
    const drinks = await fetch("https://acnhapi.com/v1/fish");
    const drinksData = await drinks.json();
    console.log(drinksData);
}

main();

