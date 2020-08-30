function weddingInvestment(input) {
  let srokNaDogovor = input.shift();
  let tipNaDogovor = input.shift();
  let dobavenDesert = input.shift();
  let broiMeseci = Number(input.shift());
  let mesechnaTaksa = 0;
  let obshtaSuma = 0;

  if (tipNaDogovor === "Small") {
    switch (srokNaDogovor) {
      case "one":
        mesechnaTaksa = 9.98;
        obshtaSuma += mesechnaTaksa;
        break;
      case "two":
        mesechnaTaksa = 8.58;
        obshtaSuma += mesechnaTaksa;
        break;
    }
  } else if (tipNaDogovor === "Middle") {
    switch (srokNaDogovor) {
      case "one":
        mesechnaTaksa = 18.99;
        obshtaSuma += mesechnaTaksa;
        break;
      case "two":
        mesechnaTaksa = 17.09;
        obshtaSuma += mesechnaTaksa;
        break;
    }
  } else if (tipNaDogovor === "Large") {
    switch (srokNaDogovor) {
      case "one":
        mesechnaTaksa = 25.98;
        obshtaSuma += mesechnaTaksa;
        break;
      case "two":
        mesechnaTaksa = 23.59;
        obshtaSuma += mesechnaTaksa;
        break;
    }
  } else if (tipNaDogovor === "ExtraLarge") {
    switch (srokNaDogovor) {
      case "one":
        mesechnaTaksa = 35.99;
        obshtaSuma += mesechnaTaksa;
        break;
      case "two":
        mesechnaTaksa = 31.79;
        obshtaSuma += mesechnaTaksa;
        break;
    }
  }

  if (dobavenDesert === "yes") {
    if (obshtaSuma <= 10) {
      obshtaSuma += 5.5;
    } else if (obshtaSuma <= 30) {
      obshtaSuma += 4.35;
    } else if (obshtaSuma > 30) {
      obshtaSuma += 3.85;
    }
  }

  if (srokNaDogovor === "two") {
    obshtaSuma -= (3.75 / 100) * obshtaSuma;
  }

  let krainaCena = obshtaSuma * broiMeseci;

  console.log(`${krainaCena.toFixed(2)} lv.`);
}
