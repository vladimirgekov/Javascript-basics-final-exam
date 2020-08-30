function weddingPresents(input) {
  let obshtBroiGosti = Number(input.shift());
  let broiPodaruci = Number(input.shift());
  let parichniPodaruci = 0;
  let elektrouredi = 0;
  let vaucheri = 0;
  let drugi = 0;

  for (let i = 1; i <= broiPodaruci; i++) {
    kategoriq = input.shift();
    if (kategoriq === "A") {
      parichniPodaruci++;
    } else if (kategoriq === "B") {
      elektrouredi++;
    } else if (kategoriq === "V") {
      vaucheri++;
    } else if (kategoriq === "G") {
      drugi++;
    }
  }

  let procentParichniPodaruci = (parichniPodaruci / broiPodaruci) * 100;
  let procentElektrouredi = (elektrouredi / broiPodaruci) * 100;
  let procentVaucheri = (vaucheri / broiPodaruci) * 100;
  let procentDrugi = (drugi / broiPodaruci) * 100;

  let procentGostiDaliPodaruk = (broiPodaruci / obshtBroiGosti) * 100;

  console.log(`${procentParichniPodaruci.toFixed(2)}%`);
  console.log(`${procentElektrouredi.toFixed(2)}%`);
  console.log(`${procentVaucheri.toFixed(2)}%`);
  console.log(`${procentDrugi.toFixed(2)}%`);
  console.log(`${procentGostiDaliPodaruk.toFixed(2)}%`);
}
