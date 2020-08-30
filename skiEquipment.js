function skiEquipment(input) {
  let bugjet = Number(input.shift());
  let cenaNaSkite = Number(input.shift());
  let cenaNaShtekite = Number(input.shift());

  let skiObuvki = 0.4 * cenaNaSkite;
  let skiObleklo = 1.4 * cenaNaSkite;

  let obshtaSuma = cenaNaSkite + cenaNaShtekite + skiObuvki + skiObleklo;

  if (obshtaSuma > 800) {
    obshtaSuma = cenaNaSkite + skiObleklo + skiObuvki;
  }

  if (bugjet >= obshtaSuma) {
    let ostavashtiPari = bugjet - obshtaSuma;
    console.log(
      `Angel's sum is ${obshtaSuma.toFixed(
        2
      )} lv. He has ${ostavashtiPari.toFixed(2)} lv. left.`
    );
  } else {
    let nedostigasthiPari = Math.abs(obshtaSuma - bugjet);
    console.log(
      `Not enough money! You need ${nedostigasthiPari.toFixed(2)} leva more!`
    );
  }
}
