const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman', 'Flash'];

console.warn('For Tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//El for In casi casi se parece pero
console.warn('For In');

for (let i in heroes) {
    console.log(heroes[i]);
}
//FOR OF
console.warn('For of');
for (let i of heroes) {
    console.log(i);
}