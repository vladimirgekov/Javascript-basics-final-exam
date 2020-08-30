function solve(input) {
  let budget = Number(input[0]);
  let boughtItems = 0;

  let star = 5.69;
  let angel = 8.49;
  let lights = 11.2;
  let wreath = 15.5;
  let candle = 3.59;

  for (let i = 1; i < input.length; i++) {
    let product = input[i];

    if (product === "Candle") {
      if (i % 3 === 0) {
        candle = 3.59 - 0.3 * 3.59;
      }
      if (budget < candle) {
        console.log(
          `Not enough money! You need ${(candle - budget).toFixed(2)}lv more.`
        );
        console.log(
          `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
        );
      } else {
        budget -= candle;
        boughtItems++;
      }
    } else if (product === "Wreath") {
      if (i % 3 === 0) {
        wreath = 15.5 - 0.3 * 15.5;
      }
      if (budget < wreath) {
        console.log(
          `Not enough money! You need ${(wreath - budget).toFixed(2)}lv more.`
        );
        console.log(
          `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
        );
      } else {
        budget -= wreath;
        boughtItems++;
      }
    } else if (product === "Lights") {
      if (i % 3 === 0) {
        lights = 11.2 - 0.3 * 11.2;
      }
      if (budget < lights) {
        console.log(
          `Not enough money! You need ${(lights - budget).toFixed(2)}lv more.`
        );
        console.log(
          `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
        );
      } else {
        budget -= lights;
        boughtItems++;
      }
    } else if (product === "Angel") {
      if (i % 3 === 0) {
        angel = 8.49 - 0.3 * 8.49;
      }
      if (budget < angel) {
        console.log(
          `Not enough money! You need ${(angel - budget).toFixed(2)}lv more.`
        );
        console.log(
          `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
        );
      } else {
        budget -= angel;
        boughtItems++;
      }
    } else if (product === "Star") {
      if (i % 3 === 0) {
        star = 5.69 - 0.3 * 5.69;
      }
      if (budget < star) {
        console.log(
          `Not enough money! You need ${(star - budget).toFixed(2)}lv more.`
        );
        console.log(
          `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
        );
      } else {
        budget -= star;
        boughtItems++;
      }
    }
    if (product === "Finish") {
      console.log(`Congratulations! You bought everything!`);
      console.log(
        `${boughtItems} items -> ${(input[0] - budget).toFixed(2)}lv spent.`
      );
    }
  }
}
