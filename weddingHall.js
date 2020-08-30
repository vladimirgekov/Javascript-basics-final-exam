function weddingHall(input) {
  let duljinaNaZalata = Number(input.shift());
  let shirinaNaZalata = Number(input.shift());
  let stranaNaBara = Number(input.shift());

  let goleminaNaZalata = duljinaNaZalata * shirinaNaZalata;

  let goleminaNaBara = stranaNaBara * stranaNaBara;

  let goleminaNaDancinga = goleminaNaZalata * 0.19;

  let svobodnoProstranstvo =
    goleminaNaZalata - goleminaNaBara - goleminaNaDancinga;

  let broiGosti = svobodnoProstranstvo / 3.2;

  console.log(Math.ceil(broiGosti));
}
