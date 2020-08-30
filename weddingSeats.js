function solve(input) {
  let lastSector = input.shift();
  let firstSectorRows = Number(input.shift());
  let oddSeats = Number(input.shift());
  let evenSeats = Number(oddSeats * 2);
  let multiplier;
  let arr = [];
  for (let i = 65; i <= lastSector.charCodeAt(0); i++) {
    let sector = String.fromCharCode(i);

    for (j = 1; j <= firstSectorRows; j++) {
      if (j % 2 === 0) {
        multiplier = evenSeats;
      } else {
        multiplier = oddSeats;
      }
      for (x = 1; x <= multiplier; x++) {
        console.log(`${sector}${j}${String.fromCharCode(x + 96)}`);
        arr.push(`${sector}${j}${String.fromCharCode(x + 96)}`);
      }
    }
    firstSectorRows++;
    console.log(arr.length);
  }
}
